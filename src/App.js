import React from "react";
import { Switch, Route } from "react-router-dom";
import { About, Contact, Home, Error } from "./pages";
import { Header, Footer } from "./components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
