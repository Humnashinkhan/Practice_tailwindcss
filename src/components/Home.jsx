import React from 'react'

const Home = () => {
  return (
    <div className="body">
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input
                  type="text"
                  className="border border-solid border-black"
                  value="searchtext"/>
             <button className="px-3 py-2 bg-green-300 m-4 rounded-lg">Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center" >
            <button className="px-4 py-2 bg-gray-100 rounded-lg">Top Rated Restaurants</button>
            </div>
        </div>
        <div className="flex">
        <div className="m-4 p-4 w-[250px] bg-gray-100">
        <img className="rounded-lg" 
            src="./assets/img2.jpg" alt=""/>
            <h3 className="font-bold py-4 text-lg">KFC</h3>
            <h4>Cusines</h4>
            <h4>Avg rating</h4>
            <h4>cost for two: 400</h4>
            <h4>Time for delivery: 28 minutes</h4>
        </div>
        <div className="m-4 p-4 w-[250px] bg-gray-100">
        <img className="rounded-lg" 
            src="./assets/img2.jpg" alt=""/>
            <h3 className="font-bold py-4 text-lg">KFC</h3>
            <h4>Cusines</h4>
            <h4>Avg rating</h4>
            <h4>cost for two: 400</h4>
            <h4>Time for delivery: 28 minutes</h4>
        </div>
        <div className="m-4 p-4 w-[250px] bg-gray-100">
        <img className="rounded-lg" 
            src="./assets/img2.jpg" alt=""/>
            <h3 className="font-bold py-4 text-lg">KFC</h3>
            <h4>Cusines</h4>
            <h4>Avg rating</h4>
            <h4>cost for two: 400</h4>
            <h4>Time for delivery: 28 minutes</h4>
        </div>
        <div className="m-4 p-4 w-[250px] bg-gray-100">
        <img className="rounded-lg" 
            src="./assets/img2.jpg" alt=""/>
            <h3 className="font-bold py-4 text-lg">KFC</h3>
            <h4>Cusines</h4>
            <h4>Avg rating</h4>
            <h4>cost for two: 400</h4>
            <h4>Time for delivery: 28 minutes</h4>
        </div>
        </div>
        </div>
  )
}

export default Home