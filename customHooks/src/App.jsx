import "./App.scss";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";

function App() {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(data);

  const images = useImages();

  return (
    <>
      <div>
        {data.length > 0 &&
          data?.map((item) => <p key={item.id}>{item.name}</p>)}
      </div>
      <div>
        {images.length > 0 &&
          images.map((image, index) => (
            <img
              className="imageStyling"
              key={index}
              src={`public/${image}`}
              alt=""
            />
          ))}
      </div>
    </>
  );
}

export default App;
