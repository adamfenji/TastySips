import "../styles/focusCard.css";

/**
 * FocusCard component for displaying detailed information about a drink recipe.
 *
 * @param {DrinkProps} props - An object containing the drink details.
 * @returns {JSX.Element} A JSX element representing the FocusCard component.
 */

interface DrinkProps{
    name: string,
    ingredients: string[],
    steps: string[],
    mocktail: string,
    glassware: string
}

function FocusCard(props: DrinkProps) {
    return (
        <>
            <div className="fullPageContainer">
                <div className="focusCardContainer">
                    <h1 className="name">{props.name}</h1>

                    <h3 className="section">Ingredients</h3>
                    <ul className="ingredientsList">
                        {props.ingredients.map((ingredient, index)=> (
                            <li className="item circleLi" key={index}>{ingredient}</li>
                        ))}
                    </ul>

                    <hr />

                    <h3 className="section">How to prepare</h3>
                    <ol className="prepList">
                        {props.steps.map((step, index)=>(
                            <li className="item stepLi">{"STEP " + (index+1) + " " +step}</li>
                        ))}
                    </ol>

                    <hr />

                    <h3 className="section">Make it a Mocktail</h3>
                    <p className="item">{props.mocktail}</p>

                    <hr />

                    <h3 className="section">Glass recommendation</h3>
                    <p className="item">{props.glassware}</p>
                </div>
            </div>
        </>
    );
}

export default FocusCard;