/* TODO - add your code to create a functional React component that renders
 a registration form */


 import React, {useEffect, useState} from "react";

 const Account = () => {
const [user, setUser] = useState (null);
const [books, setBooks] = useState ([]);
const [loading, setLoading]= useState (true);


useEffect (()=> {
    const fetchAccount = async ()=> {
        try {const userResponse = await fetch ('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api');
            if (!userResponse.ok) throw new 


        }
    }
}  )

 }