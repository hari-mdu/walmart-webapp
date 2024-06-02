import React, { useState, useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Login component
const Login = ({ setUsers }) => {
  // State to manage form inputs
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // State to store all users fetched from Firestore
  const [user, setUser] = useState([]);

  // React Router hook for navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    checkUserCredentials();
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Fetch all users from Firestore
  const getAllUsers = async () => {
    const q = query(collection(db, "user"));
    const users = onSnapshot(q, (querySnapshot) => {
      let userArray = [];
      querySnapshot.forEach((doc) => {
        userArray.push({ ...doc.data(), id: doc.id });
      });
      setUser(userArray);
      console.log(userArray);
    });
  };

  // Check user credentials
  const checkUserCredentials = async () => {
    await getAllUsers(); // Wait for getAllUsers to complete
  
    let foundUser = null; // Variable to store found user
  
    // Iterate through all users fetched from Firestore
    for (let i = 0; i < user.length; i++) {
      if (
        user[i].user.email === userData.email &&
        user[i].user.password === userData.password
      ) {
        foundUser = user[i];
        break;
      }
    }
  
    // If user found, log in and set user data in localStorage
    if (foundUser) {
      toast.success("User logged in successfully", {
        position: "top-right",
        autoClose: 5000,
      });
      localStorage.setItem("user", JSON.stringify(foundUser));
      setUserData({
        email: "",
        password: "",
      });
      setUsers(true); // Set user status to logged in
      navigate('/'); // Redirect to home page
    } else {
      toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
      });
      console.log("failed");
    }
  };
  
  // JSX for login form
  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required={true}
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required={true}
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <div className="flex items-center justify-evenly">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
