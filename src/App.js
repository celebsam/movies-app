import "./App.css";
import Header from "./components/Header/Header";
import MainNav from "./components/MainNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Trending from "./Screens/Trending";
import Series from "./Screens/Series";
import Search from "./Screens/Search";
import Movies from "./Screens/Movies";

function App() {
   return (
      <Router>
         <div className="App">
            <Header />
            <main>
               <Container>
                  <Switch>
                     <Route
                        path="/"
                        exact
                        activeClassName="active"
                        component={Trending}
                     />
                     <Route
                        path="/trending"
                        exact
                        activeClassName="active"
                        component={Trending}
                     />
                     <Route
                        path="/series"
                        activeClassName="active"
                        component={Series}
                     />
                     <Route
                        path="/search"
                        activeClassName="active"
                        component={Search}
                     />
                     <Route
                        path="/Movies"
                        activeClassName="active"
                        component={Movies}
                     />
                  </Switch>
               </Container>
            </main>
            <MainNav />
         </div>
      </Router>
   );
}

export default App;
