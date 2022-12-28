import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import New from "./pages/New";

// COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  const btnClickHandle = () => {
    alert("클릭함");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"헤더라네"}
          leftChild={<MyButton text={"왼쪽"} onClick={btnClickHandle} />}
          rightChild={<MyButton text={"오른쪽"} onClick={btnClickHandle} />}
        />
        <h2>app.js</h2>

        <MyButton
          text={"버튼"}
          onClick={btnClickHandle}
          type={"positive"}
        ></MyButton>
        <MyButton
          text={"버튼"}
          onClick={btnClickHandle}
          type={"negative"}
        ></MyButton>
        <MyButton text={"버튼"} onClick={btnClickHandle}></MyButton>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
