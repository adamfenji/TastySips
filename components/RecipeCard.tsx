import { useState } from "react";

/**
 * RecipeCard component for displaying a flip card with front and back images.
 *
 * @param {CardProps} props - An object containing the card details and focus function.
 * @returns {JSX.Element} A JSX element representing the RecipeCard component.
 */

interface CardProps{
    frontURL: string,
    backURL: string,
    focus(): void
}

function RecipeCard(props: CardProps) {

    /**
     * Toggles the card between front and back views when hovered on.
     */
    const [isFront, setFront] = useState(true);

    const flipCard = () => {
        if (isFront == true) {
            setFront(false);
        }
        else {
            setFront(true);
        }
    }

    return (
        <>
            <div className="cardContainer">

                {
                    (isFront === true) ? (<img onMouseEnter={flipCard} onMouseLeave={flipCard} onClick={props.focus} className="frontImg" src={props.frontURL} />)
                    :
                    (<img onMouseEnter={flipCard} onMouseLeave={flipCard} onClick={props.focus} className="backImg" src={props.backURL} />)
                }

            </div>
        </>
    );
}

export default RecipeCard;