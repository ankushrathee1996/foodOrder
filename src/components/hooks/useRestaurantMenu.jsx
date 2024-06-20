import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/constant";


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        let data = await fetch(MENU_API + resId)
        let json = await data.json()
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;