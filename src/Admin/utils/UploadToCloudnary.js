export const uploadToCloudinary = async (pics) => {
  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "Crave-cart");
    data.append("cloud_name", "dpksujnt8");

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/dpksujnt8/image/upload`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const fileData = await res.json();
      console.log("url:", fileData.url);
      return fileData.url;
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  } else {
    console.log("No file provided for upload.");
    return null;
  }
};
