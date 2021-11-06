import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Page0 from "./Pages/Page0/Page0";
import Page1 from "./Pages/Page1/Page1";
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";
import Navbar from "./syuan/components/Navbar";
import Navbar1 from "./syuan/components/Navbarr";
import Footer from "./syuan/components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Navbar1 />
        <Switch>
          <Route exact path="/" component={Page0} />
          <Route exact path="/Page1" component={Page1} />
          <Route exact path="/Page2" component={Page2} />
          <Route path="/Page3/:id" component={Page3} />
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
