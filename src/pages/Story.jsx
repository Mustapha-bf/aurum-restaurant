import storyImg from '../assets/story.jpg';

const Story = () => {
    return (
        <section className="story-page" id='story'>
            <div className="left-container">
                <p className='story-head'>our story ⸺</p>
                <p className='story-title'><span>Where</span> craft <span>meets</span> passion</p>
                <p className='story-p'>
                    Born from a lifelong devotion to the culinary arts, Aurum is more than a restaurant — it is a sanctuary where ingredients tell stories and every dish is an act of intention.
                    <br />
                    <span>
                        Our chef sources produce from small, trusted farms each morning. The menu changes with the seasons, guided by what the land offers and what craft can reveal. We believe fine dining should feel alive.
                    </span>
                </p>

                <div className="insights">
                    <p>
                        <span>4.8 ★</span>
                        Customer Rating
                    </p>
                    <p>
                        <span>10+</span>
                        Signature Dishes
                    </p>
                    <p>
                        <span>1K+</span>
                        Happy Guests
                    </p>
                </div>
            </div>
            <div className="right-container">
                <div className="about-frame"></div>
                <img src={storyImg} alt="Story image" />
            </div>
        </section>
    )
}

export default Story