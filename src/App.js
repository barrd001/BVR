import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Herd from "./Pages/Herd";
import Main from "./Pages/Main";
import Story from "./Pages/Story";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className='view'>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/herd'>
            <Herd />
          </Route>
          <Route path='/story'>
            <Story />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
