import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);

      // console.log(error);
    }
  };

  return (
    <>
      <section className="section-center">
        <h3>color generator: </h3>
        <form onSubmit={handleSubmit} className="color-form">
          <label className="color-label"></label>
          <input
            type="text"
            className={`color-input ${error && "error"} `}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="ie. #232323"
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...item}
              index={index}
              hexValue={item.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
