import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";
import FormNews from "./containers/FormNews/FormNews";

const App = () => {
  return (
      <Switch>
        <Route path="/" exact component={News}/>
        <Route path="/add" exact component={FormNews}/>
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
  );
}

export default App;
