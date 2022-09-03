import {Route, Switch} from "react-router-dom";
import News from "./containers/News/News";
import FormNews from "./containers/FormNews/FormNews";
import More from "./containers/More/More";
import Layout from "./components/UI/Layout/Layout";
import './App.css';

const App = () => {
  return (
    <Layout>
        <Switch>
            <Route path="/" exact component={News}/>
            <Route path="/add" exact component={FormNews}/>
            <Route path="/news/:id" exact component={More}/>
            <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
    </Layout>
  );
}

export default App;
