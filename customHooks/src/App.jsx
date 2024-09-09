import "./App.scss";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data } = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  console.log(data);

  return (
    <>
    <div>
      {data.length > 0  && data?.map((item) => (
        <p key={item.id}>{item.title}</p>
      )) }
    </div>
    </>
  );
}

export default App;
