/* TODO - add your code to create a functional React component that renders
 a navigation bar for the different views in your single page application.
  You may consider conditionally rendering some options - 
  for example 'Login' should be available if someone has not logged in yet.
   */



  import { Link } from 'react-router-dom';

const Navigation = ({ user, setUser }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/books" className="nav-link">Books</Link>
        {user ? (
          <>
            <Link to="/account" className="nav-link">Account</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                setUser(null);
              }}
              className="nav-link"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
      
      {user && (
        <div className="user-info">
          Welcome, {user.email}!
        </div>
      )}
    </nav>
  );
};

export default Navigation;