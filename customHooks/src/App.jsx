import "./App.scss";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { useTitle } from "./hooks/useTitle";

function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  const { images }= useImages();
  // useTitle('Home');

  return (
    <>
      <div>
        {data && data.length > 0 &&
          data.map((item) => <p key={item.id}>{item.name}</p>)}
      </div>
      <div>
        {images && images.length > 0 &&
          images.map((image, index) => (
            <img
              className="imageStyling"
              key={index}
              src={image}
              alt=''
            />
          ))}
      </div>
    </>
  );
}

export default App;
