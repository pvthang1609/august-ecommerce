import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import ReactCrop from "react-image-crop";
import { nanoid } from "nanoid";

import "./form-upload.scss";
import "react-image-crop/lib/ReactCrop.scss";

FormUpload.propTypes = {
  limit: PropTypes.number,
};

function FormUpload({ limit = 5 }) {
  const [img, setImg] = useState();
  const [crop, setCrop] = useState({ unit: "%", width: 50, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [arrImg, setArrImg] = useState([]);

  const imgRef = useRef(null);
  const inputRef = useRef();
  const previewCanvasRef = useRef(null);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const pushToTaskUpload = (canvas, crop) => {
    if (!crop || !canvas) {
      return;
    }

    canvas.toBlob(
      (blob) => {
        if (arrImg.length < limit) {
          const image = { name: nanoid(4), file: blob };
          const newArrImg = [...arrImg, image];
          setArrImg(newArrImg);
        } else {
          alert("Vượt quá giới hạn cho phép");
        }
      },
      "image/png",
      1
    );
  };

  const handleUploadClick = (arr) => {
    for (let item of arr) {
      const formData = new FormData();
      formData.append("file", item.file, item.name);
      formData.append("upload_preset", "avatar-user");
      Axios.post(
        "https://api.cloudinary.com/v1_1/august-ecommerce/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const index = arrImg.indexOf(item);
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            const newItem = { ...item, progress: progress };
            const newArrImg = [
              ...arrImg.slice(0, index),
              newItem,
              ...arrImg.slice(index + 1),
            ];
            console.log(progress);
            setArrImg(newArrImg);
          },
        }
      ).then((res) => console.log(res));
    }
  };

  const handleDeleteClick = (item) => {
    const index = arrImg.indexOf(item);
    const newArrImg = [...arrImg.slice(0, index), ...arrImg.slice(index + 1)];
    setArrImg(newArrImg);
  };

  return (
    <div className="grid wide">
      <div className="row">
        <div className="col l-10">
          <div className="form-upload">
            <input
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              style={{ display: "none" }}
              ref={inputRef}
            />
            <div className="upload-main">
              {img && (
                <div className="form-upload__review">
                  <ReactCrop
                    src={img}
                    onImageLoaded={onLoad}
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    onComplete={(c) => setCompletedCrop(c)}
                  />
                </div>
              )}
              <div className="form-upload__group-btn">
                <button
                  className="btn"
                  onClick={() => inputRef.current.click()}
                >
                  Browse
                </button>
                <button
                  className="btn"
                  type="button"
                  disabled={!completedCrop?.width || !completedCrop?.height}
                  onClick={() =>
                    pushToTaskUpload(previewCanvasRef.current, completedCrop)
                  }
                >
                  Crop
                </button>
                <button
                  className="btn"
                  type="button"
                  disabled={arrImg.length === 0}
                  onClick={() => handleUploadClick(arrImg)}
                >
                  Upload
                </button>
                <button className="btn" type="button">
                  Reload
                </button>
              </div>
              <div className="form-upload__status">
                {arrImg.map((item, index) => {
                  const url = window.URL.createObjectURL(item.file);
                  const size = item.file.size;
                  return (
                    <div className="form-upload__status-item" key={index}>
                      <div
                        className="percent"
                        style={{ width: `${arrImg[index].progress}%` }}
                      ></div>
                      <div className="image">
                        <img src={url} alt="none" />
                      </div>
                      <div className="content">
                        <p className="content-name">{`File name: ${item.name}.jpg`}</p>
                        <p className="content-size">{`${size / 1000}Kb`}</p>
                      </div>
                      <div className="action">
                        <button className="btn">
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button
                          className="btn"
                          onClick={() => handleDeleteClick(item)}
                        >
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="upload-crop">
              <canvas
                ref={previewCanvasRef}
                style={{
                  width: Math.round(completedCrop?.width ?? 0),
                  height: Math.round(completedCrop?.height ?? 0),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUpload;
