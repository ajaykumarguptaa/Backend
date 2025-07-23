import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setjokes] = useState([]);
  // handle cross origin request CORS policy

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <>
      <h1>Fullstack backend...</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((item, index) => (
        <div key={item.id}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </>
  );
}

export default App;
