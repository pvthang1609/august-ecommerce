//ui component (cut image, progress bar, list image cuted...)
import React, { useRef, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import ReactCrop from "react-image-crop";
import { nanoid } from "nanoid";

import uploadAction from "actions/uploadAction";
import "./upload-file.scss";
import "react-image-crop/lib/ReactCrop.scss";

UploadFile.propTypes = {
  limit: PropTypes.number,
  preset: PropTypes.string,
  handleUploadFinish: PropTypes.func,
};

function UploadFile({ limit = 5, preset = "avatar-user", handleUploadFinish }) {
  const [img, setImg] = useState();
  const [crop, setCrop] = useState({ unit: "%", width: 50, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progressInfos, setProgressInfos] = useState({ val: [] });
  const progressInfosRef = useRef(null);

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
  }, [completedCrop, selectedFiles]);

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
        if (selectedFiles.length < limit) {
          const url = window.URL.createObjectURL(blob);
          const size = blob.size;
          const name = nanoid(4);
          const newImage = { name: name, url: url, size: size, file: blob };
          const newArrImg = [...selectedFiles, newImage];
          setSelectedFiles(newArrImg);
          setProgressInfos({ val: [] });
        } else {
          alert("Vượt quá giới hạn cho phép");
        }
      },
      "image/png",
      1
    );
  };

  const handleUploadClick = async () => {
    const files = Array.from(selectedFiles);

    let _progressInfos = files.map(() => ({
      precentage: 0,
    }));

    progressInfosRef.current = {
      val: _progressInfos,
    };

    const uploadPromises = files.map((file, index) => upload(index, file));
    const result = await Promise.all(uploadPromises);
    // after has response => set value = url in cloud
    handleUploadFinish(result);
  };

  const upload = async (index, file) => {
    let _progressInfos = [...progressInfosRef.current.val];
    const cbProgress = (event) => {
      _progressInfos[index].precentage = Math.round(
        (100 * event.loaded) / event.total
      );
      setProgressInfos({ val: _progressInfos });
    };
    try {
      const result = await uploadAction.upload(
        file.file,
        cbProgress,
        file.name,
        preset
      );
      return result;
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteClick = (item) => {
    const index = selectedFiles.indexOf(item);
    const newArrImg = [
      ...selectedFiles.slice(0, index),
      ...selectedFiles.slice(index + 1),
    ];
    setSelectedFiles(newArrImg);
  };

  const handleEditClick = (item) => {
    const newName = window.prompt("Enter the new name of the file ");
    const index = selectedFiles.indexOf(item);
    const newArrImg = [
      ...selectedFiles.slice(0, index),
      { ...selectedFiles[index], name: newName },
      ...selectedFiles.slice(index + 1),
    ];
    setSelectedFiles(newArrImg);
  };

  return (
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
        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          style={{ display: "none" }}
          ref={inputRef}
        />
        <button
          type="button"
          className="btn"
          onClick={() => inputRef.current.click()}
        >
          <i className="fa fa-folder-open-o" aria-hidden="true"></i>
        </button>
        <button
          className="btn"
          type="button"
          disabled={!completedCrop?.width || !completedCrop?.height}
          onClick={() =>
            pushToTaskUpload(previewCanvasRef.current, completedCrop)
          }
        >
          <i className="fa fa-crop" aria-hidden="true"></i>
        </button>
        <button
          className="btn"
          type="button"
          disabled={selectedFiles.length === 0}
          onClick={() => handleUploadClick(selectedFiles)}
        >
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
        </button>
        <button className="btn" type="button">
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
      </div>
      <div className="form-upload__status">
        {selectedFiles.map((item, index) => {
          return (
            <div className="form-upload__status-item" key={index}>
              <div
                className="percent"
                style={{
                  width: `${progressInfos.val[index]?.precentage ?? 0}%`,
                }}
              ></div>
              <div className="image">
                <img src={item.url} alt="none" />
              </div>
              <div className="content">
                <p className="content-name">{`${item.name}.jpg`}</p>
                <p className="content-size">{`${item.size / 1000}Kb`}</p>
              </div>
              <div className="progress-numb">{`${
                progressInfos.val[index]?.precentage ?? 0
              }%`}</div>
              <div className="action">
                <button className="btn" onClick={() => handleEditClick(item)}>
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button className="btn" onClick={() => handleDeleteClick(item)}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          );
        })}
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
  );
}

export default UploadFile;
