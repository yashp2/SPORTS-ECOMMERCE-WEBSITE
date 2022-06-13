import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import SignIn from './LandingPage/SignIn';
import SignUp from './LandingPage/SignUp';
import UserProvider from './Context/UserProvider';
import CartContext from './Context/CartContext';
import Homepage from './Store/Homepage';
import Cricket from './Cricket/Cricket';
import CricketDetail from './Cricket/CricketDetail';
import Badminton from './Badminton/Badminton';
import BadmintonDetail from './Badminton/BadmintonDetail';
import Football from './Football/Football';
import FootballDetail from './Football/FootDetail';
import Tennis from './Tennis/Tennis';
import TennisDetail from './Tennis/TennisDetail';
import Cart from './Cart';
import Address from './Address';
import WishList from './WishList';
function App()
 {
   
  return (
    <div className="App min-h-screen bg-[#F9FAFF]">

        <CartContext>

         <UserProvider>
         <Router>
 {
      <Switch>
      <Route path="/Homepage">
        <Homepage />
      </Route>
      <Route path="/SignIn">
        <SignIn />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
      <Route path="/Football/:id">
        <FootballDetail />
      </Route>
      <Route path="/Football">
        <Football />
      </Route>

      <Route path="/Address">
        <Address />
      </Route>

      <Route path="/Tennis/:id">
        <TennisDetail />
      </Route>

      <Route path="/Tennis">
        <Tennis />
      </Route>

      <Route path="/Cricket">
        <Cricket />
      </Route>

      <Route path="/Wishlist">
        <WishList />
      </Route>
  

      <Route path="/Badminton/:id">
        <BadmintonDetail />
      </Route>

      <Route path="/Badminton">
        <Badminton />
      </Route>
    
    
      <Route path="/Cart">
        <Cart />
      </Route>
      
      
      
      <Route path="/:id">
        <CricketDetail />
      </Route>
   
      <Route path="/">
        <LandingPage />
      </Route>
    
      
    </Switch>              
 }    
 </Router>


         </UserProvider>
         </CartContext>
        
     </div>
  );
}

export default App;
