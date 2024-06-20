import React, { useEffect, useState } from "react";
// import "./Body.scss";
import RestaurantCard, { discountCard } from "./RestaurantCard";
import ShimmerUI from "../shimmerUI/ShimmerUI";
import { Link } from "react-router-dom";
// import { restaurantData } from "../../utils/data/data";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [searchText, setSearchText] = useState('')
  const [filterRestaurantList, setFilterRestaurantList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  const DiscountResCard = discountCard(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (searchText === '') {
      setFilterRestaurantList(listOfRestaurant)
    }
  }, [searchText, listOfRestaurant])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    // let list = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    let list = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // console.log("JSON:::",json)
    const restaurantInfo = list.map((item) => {
      return item.info
    });
    setListOfRestaurant(restaurantInfo)
    setFilterRestaurantList(restaurantInfo)
    console.log(restaurantInfo)
  }

  const topRatedRestaurant = () => {
    let newRestaurantList = listOfRestaurant.filter((res) => res.avgRating > 4)
    setFilterRestaurantList(newRestaurantList)
  }

  const handleSearchText = (e) => {
    setSearchText(e.target.value)
    const list = listOfRestaurant.filter((res) => (res.name.toLowerCase().includes(searchText.toLowerCase())))
    setFilteredList(list)
  }

  const handleSearch = () => {
    setFilterRestaurantList(filteredList)
  }

  console.log("Filter::", filterRestaurantList)

  return filterRestaurantList.length === 0 ? <ShimmerUI /> : 
    <>
      


      {/* <div className="filter flex justify-center">
        <div className="search m-4 p-4">
          <input className="searchBox border border-solid border-black" type="text" value={searchText} onChange={handleSearchText} />
          <button className="px-2 py-2 m-4 items-center bg-green-200 rounded-lg" onClick={handleSearch}>Search</button>
        </div>
        <div className="topRated m-4 p-4">
          <button className="topRatedBtn px-2 py-2 m-4 border border-solid border-black rounded-lg" onClick={topRatedRestaurant}>Top Rated Restaurant</button>
        </div>
      </div> */}
      {/* <div className="flex justify-center flex-wrap">
        {filterRestaurantList.length !== 0 ? filterRestaurantList.map(item => {
          if (item.discountTag === "FLAT DEAL") {
            return <DiscountResCard restaurantData={filterRestaurantList} />
          } else {
            return <RestaurantCard restaurantData={filterRestaurantList} />
          }
        })
          : <ShimmerUI />}
      </div> */}


      <div className="body">
          <div className="filter flex justify-center">
            <div className="search m-4 p-4">
              <input className="searchBox border border-solid border-black" type="text" value={searchText} onChange={handleSearchText} />
              <button className="px-2 py-2 m-4 items-center bg-green-200 rounded-lg" onClick={handleSearch}>Search</button>
            </div>
            <div className="topRated m-4 p-4">
              <button className="topRatedBtn px-2 py-2 m-4 border border-solid border-black rounded-lg" onClick={topRatedRestaurant}>Top Rated Restaurant</button>
            </div>
          </div>
          <div className="res-container flex flex-wrap">

      {/* {
              filterRestaurantList && filterRestaurantList.map((item) => {
                if(item.discountTag === "FLAT DEAL"){
                  return <DiscountResCard />
                }else{
                  return <RestaurantCard />
                }
              })
            } */}
      {/* { */}
      {/* filterRestaurantList.map() */}
      <RestaurantCard restaurantData={filterRestaurantList} />
      {/* } */}
      </div>
        </div>
      {/* : <ShimmerUI /> */}
    </>
  // );
};
export default Body;
