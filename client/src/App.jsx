import { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    API.get("/").then((res) => setData(res.data));
  }, []);

  return <h1>{data}</h1>;
}

export default App;
