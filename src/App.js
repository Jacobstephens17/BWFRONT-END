import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import RecipeForm from "./components/RecipeForm"
import Login from "./components/Login"
import Register from './components/Register';
import './App.css'
import ListOfRecipies from "./components/ListOfRecipies"
import styled from 'styled-components';


function App() {
  return (

    <StyledApp className="App">
      <Route exact path="/" component={Home} />
      <Header/>
      <Route path="/login" component={Login} />
      <Route path='/register' component={Register} />
      <Route path="/recipes" component = {ListOfRecipies}/>
      <PrivateRoute path = "/protected" component = {RecipeForm}/>
    </StyledApp>
  );
}

export default App;



const StyledApp = styled.div`
  max-width:100%;
`