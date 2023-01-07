import React, {useEffect} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Prices from "./components/Prices";
import Form from "./components/Form";
import Solutions from "./components/Solutions";
import "./App.css";
import Initial from "./components/Initial";
import Formation from "./components/Formation";
import Cookies from "./components/Cookies/Cookies";
import Scripts from "./Scripts";

function App() {
  useEffect(() => {
    Scripts();
  },[]);

  return (
    <>
      <Header/>
      <Initial/>
      <Formation/>
      <Cookies/>
      <Solutions/>
      <Prices/>
      {/* <Form/> */}
      <Footer/>
    </>
  );
}

export default App;
