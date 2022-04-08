import React, { useState } from "react";

function Toggle() {
  const [current, chngState] = useState(false);

  function swap() {
    chngState((current) => !current);
  }
  /*function chgBack(current){
    if (current){
      return "red"
    } else {
      return "white"
    }
  }*/

  const color = current ? "red" : "white";

  return <button onClick={swap} style={{ background: color}}>{current ? "ON" : "OFF"}</button>;
}

export default Toggle;
