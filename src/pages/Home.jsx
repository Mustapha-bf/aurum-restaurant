import NavBar from "../components/NavBar"

const Home = () => {
    return (
        <section className="home" id="home">
            <p className="established">⸺ Est. 2024 — Algiers ⸺</p>
            <div className="welcome-container">
                <p className="slogan">
                    The Art of <br></br>
                    <span> Fine Dining. </span>
                </p>
            </div>
            <div className="tagline">
                <p>◦ Seasonal tasting menus</p>
                <p>◦ Private Dining</p>
                <p>◦ Unforgettable moments</p>
            </div>
            <div className="explore">
                <div className="explore-btns">
                    <a href="#menu">Explore menu</a>
                    <a href="#reserve">Reserve a table</a>
                </div>
                <div className="scroll">
                <div className="scroll-line"></div>
                scroll
                </div>
            </div>
        </section>
    )
}

export default Home