import { useAuth } from "../store/Auth";


const About = () =>{

    const {user} = useAuth();
    return(
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome, {user.username}</p>
                            <h1>Why choose us?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a tenetur, ullam excepturi sequi fugit beatae doloremque quo aut praesentium est explicabo mollitia id, repudiandae nisi necessitatibus magnam molestias minima?</p>
                           
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a tenetur, ullam excepturi sequi fugit beatae doloremque quo aut praesentium est explicabo mollitia id, repudiandae nisi necessitatibus magnam molestias minima?</p>

                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect now</button>
                                </a>

                                <a href="/services">
                                    <button className="btn secondary-btn">Learn more</button>
                                </a>
                            </div>
                        </div>

                        <div className="hero-image">
                            <img src="images/about.png" alt="Home main image" width="500" height="500"/>
                        </div>
                    </div>
                </section>
            </main>

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registered companies</p>
                    </div>
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registered companies</p>
                    </div>
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registered companies</p>
                    </div>
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registered companies</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About