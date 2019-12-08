import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios("http://localhost:4000/items/v1/").then(result => {
        console.log("res", result);
        setData(result.data);
      });
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.objectID}>
          <img src={`${item.image}`} alt={item.title} width="300"/>
          <div className="title">{item.title}</div>
        </li>
      ))}
    </ul>
  );
};

const rootElement = document.getElementById("react-root");

ReactDOM.render(<App />, rootElement);
