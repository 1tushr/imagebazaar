import React from 'react';

export default function DisplayImages({ images }) {
  if (!images) {
    return null; // or return an appropriate message or component if images is undefined
  }

  return (
    <div>
      {images.map((pic, index) => (
        <img key={index} src={pic.urls.small} alt={pic.alt_description} />
      ))}
    </div>
  );
}
