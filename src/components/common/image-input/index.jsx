import "./ImageInput.css";

const ImageInput = ({ getPhoto, image }) => {
  return (
    <label className='imageInput'>
      {image ? <img src={image} alt='' /> : <i className='fa fa-camera fa-10x' />}

      <input type='file' name='logofile' style={{ display: "none" }} onChange={(e) => getPhoto(e)} />
    </label>
  );
};

export default ImageInput;
