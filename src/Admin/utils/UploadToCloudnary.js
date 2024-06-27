export const uploadToCloudinary = async (pics) => {
    
    if (pics) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "Crave-cart");
      data.append("cloud_name", " dpksujnt8");
  
      const res = await 
      fetch(`https://api.cloudinary.com/v1_/dpksujnt8/image/upload`, {
        method: "post",
        body: data,
      })
        
        const fileData=await res.json();
        console.log("url : ", fileData);
        return fileData.url
  
    } else {
      console.log("error");
    }
  };
