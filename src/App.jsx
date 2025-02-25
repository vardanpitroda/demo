import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Form from "./components/form";
import Form2 from "./components/form2";
import Table from "./components/table";

function App() {
  const user = {
    name: "John Doe",
    age: 30,
  };

  function getData(data) {
    console.log(data);
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About getData={getData} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form setData={setData} />} />
          <Route path="/table" element={<Table data={data} />} />
          <Route path="/form2" element={<Form2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
