const Home = () =>{
    return(
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the India's largest tech company</p>
                            <h1>Welcome to demo website</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a tenetur, ullam excepturi sequi fugit beatae doloremque quo aut praesentium est explicabo mollitia id, repudiandae nisi necessitatibus magnam molestias minima?
                            Veniam temporibus possimus repudiandae impedit maxime, blanditiis sint doloribus. Laborum obcaecati tempora maxime qui soluta cum perferendis? Recusandae id unde incidunt aliquam iusto consequuntur, officia nesciunt quis deserunt. Ad, expedita?
                            </p>

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
                            <img src="images/home.png" alt="Home main image" width="500" height="500"/>
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

            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-image">
                            <img src="images/design.png" alt="Home main image" width="500" height="500"/>
                        </div>
                        <div className="hero-content">
                            <p>We are here to help you</p>
                            <h1>Get started today</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a tenetur, ullam excepturi sequi fugit beatae doloremque quo aut praesentium est explicabo mollitia id, repudiandae nisi necessitatibus magnam molestias minima?
                            Veniam temporibus possimus repudiandae impedit maxime, blanditiis sint doloribus. Laborum obcaecati tempora maxime qui soluta cum perferendis? Recusandae id unde incidunt aliquam iusto consequuntur, officia nesciunt quis deserunt. Ad, expedita?
                            </p>

                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">Connect now</button>
                                </a>

                                <a href="/services">
                                    <button className="btn secondary-btn">Learn more</button>
                                </a>
                            </div>
                        </div>

                        
                    </div>
                </section>
        </>
    )
}

export default Home