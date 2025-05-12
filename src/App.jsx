// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/buttonComponent";
import ImageComponent from "./components/immagine";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ButtonComponent content="Questo è un bottone" className="button-component my-5 " />

      <ImageComponent
        imageSrc="https://images.unsplash.com/photo-1746822132410-0aa489a964f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="immagin"
      />
    </>
  );
}

export default App;
