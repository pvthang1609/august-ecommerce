import { uploadAxiosClient } from "api/axiosClient";

const upload = async (file, onUploadProgress, name, preset) => {
  //preset is name of upload presets in cloud server
  const formData = new FormData();
  formData.append("file", file, name);
  formData.append("upload_preset", preset);

  return await uploadAxiosClient.post("/upload", formData, {
    onUploadProgress,
  });
};

const uploadAction = {
  upload,
};

export default uploadAction;
