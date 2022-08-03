export const fileUpload = async (file) => {
  if (!file) return null;

  const cloudUrl = "https://api.cloudinary.com/v1_1/db1ylyqov/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const res = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Fail to upload file");
    const cloudResp = await res.json();

    return cloudResp.secure_url;
  } catch (error) {
    return null;
  }
};
