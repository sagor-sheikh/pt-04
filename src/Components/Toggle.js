import React, { useState } from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(true);

  return (
    <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>
      {
        toggle && <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit vitae
        facilis a eum iure et esse cum, aut nulla est natus laboriosam ratione
        odio non, quasi, quas amet culpa incidunt. Reprehenderit quia quasi
        error. Impedit, accusantium nam doloremque natus delectus, alias,
        asperiores harum dignissimos suscipit eaque maxime sint esse fugiat?
      </p>
      }
      <div style={{textAlign: "center"}}>
        <button onClick={() => {setToggle(!toggle)}}>{
            toggle ? "Hide" : "Show"
        }</button>
      </div>
    </div>
  );
};

export default Toggle;
