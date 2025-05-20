/* TODO - add your code to create a functional React component 
that renders a login form */
import axios from "axios";
import React  from "react";
import { Await } from "react-router-dom";
const LoginForm=({authenticate}) => {

const login = async (FormData) => {
const username = FormData.get ("username")
const password = FormData.get ("password")
const user = {username , password}

try {
  const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", user);
console.log (data)
window.localStorage.setItem("token", data.token)
authenticate(window.localStorage.getItem("token"))
}catch (error) {
    console.error(error)}
}}
    return (
        <form action={login}>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password"/>
            </label>
            <button>Login</button>
        </form>
    )
export default Login;