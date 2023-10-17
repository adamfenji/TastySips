/**
 * Hero component for displaying the hero section of the web application.
 *
 * @returns {JSX.Element} A JSX element representing the Hero component.
 */
function Hero() {
    return (
        <>
            <img id="logo" src="https://assets.24g.com/public/2022-frontend-test-project/24g_logo.svg" />
            <div className="heroContainer">

                <h1 id="header">Welcome Holiday Text</h1>

                <p id="hero_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ipsum? Quo repellat dolorum porro ipsam laborum, maxime excepturi ab adipisci beatae non. Id eveniet animi quae ducimus voluptatum corporis mollitia.</p>
            </div>
        </>
    );
}

export default Hero;