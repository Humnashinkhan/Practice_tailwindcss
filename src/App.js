import React from 'react'
import Home from './components/Home';
import Form from './components/Form.jsx';
function App() {
  return (
    <>
    <div className="flex justify-between bg-pink-200 shadow-lg">
     <div className="logo-container">
      <img className="w-24 p-3" 
      src="./assets/img1.jpg" alt=""/>
     </div>
     <div className="flex items-center">
      <ul className="flex p-5 m-5">
        <li className="px-5 cursor-pointer font-medium text-lg">Home</li>
        <li className="px-5 cursor-pointer font-medium text-lg">About Us</li>
        <li className="px-5 cursor-pointer font-medium text-lg">Contact Us</li>
        <li className="px-5 cursor-pointer font-medium text-lg">Cart</li>
        <li className="px-5 cursor-pointer font-medium text-lg">Service</li>
      </ul>
     </div>
    </div>
    <Home/>
    <Form/>
    </>
  );
}

export default App;
