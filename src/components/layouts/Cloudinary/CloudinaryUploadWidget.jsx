import { useRef } from 'react'

function CloudinaryUploadWidget({ sendInfo }) {
  const cloudName = "smilecmills";
  const uploadPreset = "Fresh_Smile_Cmills

  ";

  const abled = useRef(null);

  let myWidget = cloudinary.createUploadWidget({
    cloudName : cloudName,
    uploadPreset, 
  },(error, result) => {
    if(!error && result && result.event === "success"){
      console.log("Done!, Here is the image info: ", result.info)
      sendInfo(result.info.url);
      abled.current.disabled = true;
    }
  })
  
  return (
    <button ref={abled} type='button' onClick={e => myWidget.open()}>Subir Imagen</button>
  )
}

export default CloudinaryUploadWidget