/* TODO - add your code to create a functional React component 
that renders account details for a logged in user.
 Fetch the account data from the provided API. 
 You may consider conditionally rendering a message for other users that prompts 
 them to log in or create an account.  */

 import React, {useEffect, useState} from "react"; 

 const AccountDetails = () => {

const [user, setUser] = useState (null);
const [loading, setLoading] = useState (true);


useEffect (() => {
    const fetchAccountData = async () => {
        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api");
if (!response.ok) throw new Error ('User not authenticated');

const data = await response.json();
setUser (data);
             }     catch (error) {
setUser(null);
             }finally{setLoading(false);}
        };
fetchAccountData();
    }, []);

 if (loading) {
    return <p> Loading account details </p>;}
if (!user){
    return (
        <div>
            <h2> Welcome </h2>
            <p> Please <a href="/login">Log in</a> or <a href="/signup"> Create an account</a> </p>
        </div>
    );
}
return (
    <div> 
        <h2> Account Details </h2>
        <p>Name {user.name}</p>
        <p>Email {user.email}</p>
    </div>
);
   };
    


 export default AccountDetails;