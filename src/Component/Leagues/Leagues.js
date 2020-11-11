import React, {useState} from 'react';
import EPL from './EPL';

const Leagues = (props) => {
    const [state, setState] = useState({
        shown_league: "all"
    });
    const {shown_league} = state;
    return (
        <section className="leagues">
            {/* hold main menu on the left side */}
            <div className="leagues-nav">
                <div className="wrap">
                    <div className="links">
                        <img src={require("../../Assets/images/product/epl/logo-white-3.png").default}alt="Premier League"/>
                    </div>
                    <div className="links">
                        <img src={require("../../Assets/images/product/laliga/logo-white-3.png").default}alt="La Liga"/>
                    </div>
                    <div className="links">
                        <img src={require("../../Assets/images/product/bundesliga/logo-white-3.png").default}alt="Bundes Liga"/>
                    </div>
                    <div className="links">
                        <img src={require("../../Assets/images/product/seriea/logo-white.png").default}alt="Serie A"/>
                    </div>
                    <div className="links">
                        <img src={require("../../Assets/images/product/ligue1/logo-white-3.png").default}alt="Ligue 1"/>
                    </div>
                </div>
            </div>
            {/* show product on the right side */}
            <div className="leagues-products">
                <div className="leagues-products-wrap">
                    {shown_league && (
                        <EPL></EPL>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Leagues;