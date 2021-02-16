// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/fundamentals/header";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/user/:userId" component={UserProfile} />
          <Route exact path="/user/:userId/posts" component={UserPosts} />
          <Route exact path="/post/:id" component={postRender} />
          <Route exact path="/edit/post/:id" component={postRenderEdit} />

          <Route exact path="/user/:userId/todos" component={UserTodos} />
          <Route exact path="/user/:userId/albums" component={UserAlbum} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
