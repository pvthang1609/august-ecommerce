import Axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import ReactCrop from "react-image-crop";
import "react-image-crop/lib/ReactCrop.scss";
import { nanoid } from "nanoid";

FormFile.propTypes = {
  limit: PropTypes.number,
};

function FormFile({ limit = 1 }) {
  const [img, setImg] = useState();
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [arrImg, setArrImg] = useState([]);

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

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
        if (arrImg < limit) {
          const newArrImg = [...arrImg, blob];
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
      const name = nanoid(4);
      const formData = new FormData();
      formData.append("file", item, name);
      formData.append("upload_preset", "avatar-user");
      Axios.post(
        "https://api.cloudinary.com/v1_1/august-ecommerce/upload",
        formData
      ).then((res) => console.log(res));
    }
  };

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

  return (
    <div style={{ paddingTop: "7.1rem" }}>
      <div>
        <input type="file" accept="image/*" onChange={onSelectFile} />
      </div>
      <ReactCrop
        src={img}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
      />
      <div>
        <canvas
          ref={previewCanvasRef}
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0),
          }}
        />
      </div>
      <button
        type="button"
        disabled={!completedCrop?.width || !completedCrop?.height}
        onClick={() =>
          pushToTaskUpload(previewCanvasRef.current, completedCrop)
        }
      >
        Thêm vào task upload
      </button>
      <button
        type="button"
        disabled={arrImg.length === 0}
        onClick={() => handleUploadClick(arrImg)}
      >
        Upload
      </button>
    </div>
  );
}

export default FormFile;
