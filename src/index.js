import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header.component";
import "./styles.css";
import Profile from "./components/profile/profile.component";
import Stories from "./components/stories/stories.component";
import CardList from "./components/card-list/cardlist.component";
import Suggestion from "./components/suggestion/suggestion.component";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <navbar>
          <Profile />
          <Stories />
          <Suggestion />
        </navbar>
        <CardList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
