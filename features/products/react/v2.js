import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios("/items/v1/").then(result => {
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
          <div style={{ position: "relative" }}>
            <div className="overlay">
              <div className="label">{item.title}</div>
            </div>

            <LazyLoadImage
              alt={item.title}
              height={300}
              width={300}
              src={item.image}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

const rootElement = document.getElementById("react-root");

ReactDOM.render(<App />, rootElement);
