import { useState } from "react";
import RecipeCard from "./RecipeCard";
import FocusCard from "./FocusCard";
import useDrinks from "../hooks/useDrinks.ts";

/**
 * RecipeCardGallery component for displaying a gallery of recipe cards.
 * Allows users to get a detailed (focused) view of the card on click.
 *
 * @returns {JSX.Element} A JSX element representing the RecipeCardGallery component.
 */

function RecipeCardGallery() {

    /**
     * Toggles focus mode for a specific drink card.
     *
     * @param {object} drink - The drink object to focus on.
     */
    const [isFocused, setFocus] = useState(false);
    const [focusedDrink, setFocusedDrink] = useState<any>(null);
    
    const focusOnCard = (drink: any) => {
        if (isFocused == true) {
            setFocus(false);
        }
        else {
            setFocus(true);
            setFocusedDrink(drink);
        }
    }

    //Getting the drinks data
    const drinksData: any = useDrinks();

    return (
        <div className="cardGallery">


            {
                (isFocused === true) ? (
                    <>
                        <img id="deleteIcon" onClick={focusOnCard} src="https://assets.24g.com/public/2022-frontend-test-project/exit_icon.svg" />
                        {focusedDrink && <FocusCard
                            name={focusedDrink.name}
                            ingredients={focusedDrink.ingredients}
                            steps={focusedDrink.steps}
                            mocktail={focusedDrink.mocktail}
                            glassware={focusedDrink.glassware}
                        />}
                    </>
                )
                :
                (
                    drinksData?.map((drinks: any, index: any) => {
                        return <RecipeCard
                            key={index}
                            frontURL={drinks.images.front}                                
                            backURL={drinks.images.back}
                            focus={() => {focusOnCard(drinks)}}
                        />
                    })
                )
                
            }

        </div>
    );
}

export default RecipeCardGallery;