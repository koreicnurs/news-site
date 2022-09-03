import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";

const App = () => {
  return (
      <Switch>
        <Route path="/" exact component={News}/>
        <Route render={() => <h1>Not Found</h1>}/>
      </Switch>
  );
}

export default App;
