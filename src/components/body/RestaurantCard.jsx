import React from 'react'
// import './RestaurantCard.scss'
import { CDN_URL } from '../../utils/constant'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../hooks/useOnlineStatus'

const RestaurantCard = (props) => {

    //   console.log(props.restaurantData)

    const onlineStatus = useOnlineStatus()

    if (onlineStatus === false) return <h1>You are offline, Check your network connection.</h1>

    // console.log("|||||||||||",props.restaurantData[0].aggregatedDiscountInfoV3.discountTag)

    return (
        <>
            {
                props.restaurantData.map((item) => (
                    <Link key={item.id} to={"/restaurants/" + item.id}>
                        {/* <div className='absolute bg-black decoration-white m-2 p-2'>
                            {item?.aggregatedDiscountInfoV3?.discountTag ? "Flat Deal" : ""}
                        </div> */}
                        <div className='m-4 p-4 w-64 bg-slate-100 rounded-lg hover:bg-black group cursor-pointer'>
                            <img className='rounded-lg ' src={CDN_URL + item.cloudinaryImageId} alt="res-logo" />
                            <h3 className='font-bold py-4 text-xl group-hover:text-white'>{item.name}</h3>
                            <h6 className='group-hover:text-white'>{item.cuisines.join(', ')}</h6>
                            <h6 className='group-hover:text-white'>{item.avgRating} starts</h6>
                            <h6 className='group-hover:text-white'>{item.costForTwo}</h6>
                            <h6 className='group-hover:text-white'>{item.sla.deliveryTime} minutes</h6>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export const discountCard = (RestaurantCard) => {
    return () => {
        return (
            <div>
                <label>Flat Deal</label>
                <RestaurantCard />
            </div>
        )
    }
}

export default RestaurantCard;