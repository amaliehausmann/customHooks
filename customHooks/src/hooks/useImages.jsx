import { useEffect, useState } from "react";

export function useImages() {
  const [images, setImages] = useState([]);

  //   UseEffect der kun kører funktionen når siden loades
  useEffect(() => {
    // asynkron funktion der indlæser billeder fra public folder
    async function loadImages() {
      // Importerer alle billeder fra public mappen
      const imageImports = import.meta.glob("../../public/*");

      //   Henter alle stier til billederne fra imageImports objektet, hvor key er stien
      const imagePaths = Object.keys(imageImports);

      // Mapper stierne i et nyt array hvor '../../public/' fjernes med path.replace
      const imageArray = imagePaths.map((path) => {
        return path.replace("../../public/", "");
      });

      setImages(imageArray);
    }

    loadImages();
  }, []);

  return { images };
}
