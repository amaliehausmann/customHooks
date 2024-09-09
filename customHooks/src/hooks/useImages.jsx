import { useEffect, useState } from "react";

export function useImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageArray = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

    setImages(imageArray);
  }, []);

  return images;
}
