
import { useState, useEffect} from "react"
import React from "react"
import { Router, Routes, Route } from "react-router-dom";
import Account from './components/Account';
import BookList from './components/BookList';
import Login from './components/Login';
import Navigation from './components/Navigations';
import Register from './components/Register';
import SingleBook from "./components/SingleBook";
import axios from "axios";


function App() {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null);
  const [allBooks, setAllBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchBooks = async () => {
     try {
      const {data} = await axios.get ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
     console.log (data)
     setAllBooks(data)
    } catch (error){console.error(error)
    }
    };
    fetchBooks ();
  }, []);
const authenticate = async (token) => {
  try {
    if(!token){
    throw error ("No token found")};
    }
  const response = await axios.get ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/me",{
    headers:{
      "Authorization":`${window.localStorage.getItem('token')}`
    }
  })
  console.log(response)
  setUser(response.data)
catch (error){
  console.error(error);
}
  };
  useEffect(() => {
    const loggedInToken = window.localStorage.getItem("token");
    if(loggedInToken){
      authenticate(loggedInToken);
    }
  }, [user.id]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const {data} = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/favorites", {
          headers: {
            "Authorization": `${window.localStorage.getItem('token')}`
          }
        })
        console.log("favorites", data)
        setFavorites(data)
      } catch (error) {
        console.error(error)
      }
    }
    const loggedInToken = window.localStorage.getItem("token")
    if(loggedInToken)
    {
      fetchFavorites();
    }
  },[user.id]);

  return (
   
    <div>
      {
        location.pathname === "/signup" ? (
          null
        ) : (
          <div>
            {
              user.id ? <Welcome user={user} setUser={setUser}/> :
              <div>
                <h1>Please log in!</h1>
                <LoginForm authenticate={authenticate}/>
                <Link to='/signup'><h3>Or Sign up!</h3></Link>
                
              </div>
}
             <hr/>
          </div>
        )}

   <Router>
<Routes>
<Route path="/book"element={<BookList/>}/>
<Route path="login"element={<Login/>}/>
<Route path="register"element={<Register/>}/>
<Route path="accountr"element={<Account/>}/>
</Routes>
   </Router> 
   </div>
  );
}


export default App
