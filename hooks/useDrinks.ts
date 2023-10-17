import { useEffect, useState } from "react";

/**
 * Custom React Hook for fetching and managing drink data from the 24G link provided.
 *
 * @returns {Array} An array of drink data objects.
 */
function useDrinks() {

    //useState for storing and exporting data
    const [drinksData, setDrinksData] = useState(null);

    //useEffect that contains an async function to fetch the data
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://assets.24g.com/public/2022-frontend-test-project/drinks.json");
            const data = await response.json();

            setDrinksData(data.drinks);

            
        }

        fetchData();
    }, []);

    return drinksData;
}

export default useDrinks;