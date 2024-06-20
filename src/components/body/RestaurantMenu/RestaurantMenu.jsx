import useRestaurantMenu from '../../hooks/useRestaurantMenu';
import ShimmerUI from '../../shimmerUI/ShimmerUI';
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId)

    if (resInfo === null) return <ShimmerUI />;

    console.log("Res Info", resInfo)

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info

    // let cardLength = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[cardLength.length - 5]?.card?.card

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {/* <ul>
                {itemCards.map((item, i) => {
                    return <li key={i}>{item.card.info.name} - {"Rs."}{item.card.info.price / 100}</li>
                })}
            </ul> */}
        </div>
    )
}

export default RestaurantMenu