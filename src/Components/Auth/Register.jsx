import React, { useState } from "react";
import {collection, addDoc} from "firebase/firestore"
import {db} from '../../firebase'


export const Register = () => {
   // State to manage user data
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  
// Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // Add user to Firestore database
  const addUser = async () => {
    try {
      // Add user document to 'user' collection in Firestore
      const docRef = await addDoc(collection(db, "user"), {
        user: userData,
      });
      // Display success toast if user added successfully
      toast.success("User registered successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      // Display error toast if user registration fails
      toast.error("Error in registering the user", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.error("Error adding user info", error);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();// Call addUser function to register user

    // Reset form fields after submission
    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required={true}
            value={userData.name}
            onChange={handleChange}
            name="name"
          />
        </div>
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
            value={userData.email}
            onChange={handleChange}
            name="email"
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
            value={userData.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="flex items-center justify-evenly">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};
