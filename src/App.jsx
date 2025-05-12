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
      <h1>IL MIO GIARDINO</h1>
      <div className="container">
        <ButtonComponent content="AQUISTA SUBITO" />

        <ImageComponent
          imageSrc="https://images.unsplash.com/photo-1746822132410-0aa489a964f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="immagin"
        />
        <ImageComponent
          imageSrc="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="immagin"
        />
        <ImageComponent
          imageSrc="https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="immagin"
        />
      </div>
    </>
  );
}

export default App;
