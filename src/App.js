import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home";
import Footer from "./components/Footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Aboutme from "./components/Aboutme/Aboutme";
import "./app.css";
import Gallary from "./components/Gallary/Gallary";
import Videos from "./components/Videos/Videos";
import Contactme from "./components/Contactme/Contactme";
import Publications from "./components/Publications/Publications";
import Upbtn from "./components/Upbtn/Upbtn";
import Government from "./components/Government/Government";
import NotFound from "./components/NotFound/NotFound";
import Political from "./components/Political/Political";
import News from "./components/News/News.jsx";
import Organisations from "./components/Organisations/Organisations";
import BoardofDirector from "./components/BoardofDirector/BoardofDirector";
import Honors from "./components/Honors/Honors";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="body">
          <Switch>
            <Route path="/aboutme/politicaljourney" component={Political} />
            <Route path="/aboutme/gvtappointments" component={Government} />
            <Route path="/aboutme/foundedorg" component={Organisations} />
            <Route
              path="/aboutme/boardofdirector"
              component={BoardofDirector}
            />
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/gallery" component={Gallary} />
            <Route path="/videos" component={Videos} />
            <Route path="/contact" component={Contactme} />
            <Route path="/publications" component={Publications} />
            <Route path="/news" component={News} />
            <Route path="/honors" component={Honors} />
            <Route path="/" exact component={Home} />
            <Route exact component={NotFound} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Upbtn />
        <Footer />
      </div>
    </>
  );
}

export default App;
