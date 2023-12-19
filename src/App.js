import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home"
import c from "./App.css"

function  App() {
  
  return (
    <div className={c.app} >
      <Route component={Home} exact path="/" />
    
    </div>
  );
}

export default App;
