// src/components/TryOnComponent.js
import React, { useState } from 'react';
import img from './image.png';
import defaultImage2 from './model.webp';
import defaultImage1 from './dress.jpg';

const TryOnComponent = () => {
  const [image1, setImage1] = useState(defaultImage1);
  const [image2, setImage2] = useState(defaultImage2);
  const [showThirdImage, setShowThirdImage] = useState(false);
  const [thirdImageUrl, setThirdImageUrl] = useState('');

  const handleImageUpload1 = (event) => {
    setImage1(URL.createObjectURL(event.target.files[0]));
  };

  const handleImageUpload2 = (event) => {
    setImage2(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = () => {
    const thirdImageUrl = img; // Using imported image as third image
    setThirdImageUrl(thirdImageUrl);
    setShowThirdImage(true);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mb-3">
            <label htmlFor="imageUpload1" className="card-img-top">
              {image1 && <img src={image1} alt="Uploaded 1" className="card-img-top" />}
              <input type="file" accept="image/*" id="imageUpload1" onChange={handleImageUpload1} style={{ display: 'none' }} />
              <h4 className="text-center mt-2"><b>Upload Dress Photo</b></h4>
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <label htmlFor="imageUpload2" className="card-img-top">
              {image2 && <img src={image2} alt="Uploaded 2" className="card-img-top" />}
              <input type="file" accept="image/*" id="imageUpload2" onChange={handleImageUpload2} style={{ display: 'none' }} />
              <h4 className="text-center mt-2"><b>Upload Your Photo</b></h4>
            </label>
          </div>
        </div>
        {showThirdImage && (
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={thirdImageUrl} alt="Third Image" className="card-img-top" />
              <h4 className="text-center mt-2"><b>Result</b></h4>
            </div>
          </div>
        )}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary btn-lg" onClick={handleSubmit}>Try On</button>
      </div>
    </div>
  );
};

export default TryOnComponent;
