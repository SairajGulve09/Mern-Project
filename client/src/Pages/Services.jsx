import { useAuth } from "../store/Auth";

const Services = () => {
    const { services } = useAuth();
    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Projects</h1>
            </div>

            <div className="container grid grid-three-cols">
                {
                    services.map((currElem, index) => {
                        const {provider, price, services, description} = currElem;

                        return(
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src="/images/design.png" alt="Services image" width="500" height="500" />
                            </div>

                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                    <p>{provider}</p>
                                    <p>{price}</p>
                                </div>
                                <h2>{services}</h2>
                                <p>{description}</p>
                            </div>
                        </div>);
                    })
                }

            </div>
        </section>
    );
};

export default Services
