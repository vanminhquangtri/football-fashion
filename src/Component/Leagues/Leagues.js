import React, {useState, useEffect} from 'react';
import Laliga from './Laliga';
import EPL from './EPL';
import Bundesliga from './Bundesliga';
import SerieA from './SerieA';
import Ligue1 from './Ligue1';
import All from '../../Assets/images/section-top-bar/ball.png';

const Leagues = (props) => {
    const [state, setState] = useState({
        shown_league: "all"
    });
    const {shown_league} = state;
    const changeShownLeage = (ev, league) => {
        ev.preventDefault();
        setState((prevState) => {
            return {
                ...prevState,
                shown_league: league
            }
        })
    };
    useEffect(() => {
        // scroll to top of page
        window.scrollTo(0, 0);
        // add border of links if click;
        const navLinks = document.querySelectorAll(".leagues-nav .wrap .links");
        for (let i = 0; i < navLinks.length; i++){
            navLinks[i].addEventListener("click", () => {
                for (let k = 0; k < navLinks.length; k++) {
                    navLinks[k].style.border = "none"; 
                }
                navLinks[i].style.borderBottom = "2px solid white";
            })
        };
        document.title = "Top 5 giải hàng đầu Châu Âu"
    }, [shown_league]);
    return (
        <section className="leagues">
            {/* hold main menu on the left side */}
            <div className="leagues-nav">
                <div className="wrap">
                    <div className="links" onClick={(ev)=>changeShownLeage(ev, "epl")}>
                        <img src={require("../../Assets/images/product/epl/logo-white-3.png").default} alt="Premier League" className="epl"/>
                    </div>
                    <div className="links" onClick={(ev)=>changeShownLeage(ev, "la-liga")}>
                        <img src={require("../../Assets/images/product/laliga/logo-white-3.png").default} alt="La Liga" className="laliga"/>
                    </div>
                    <div className="links" onClick={(ev)=>changeShownLeage(ev, "bundes-liga")}>
                        <img src={require("../../Assets/images/product/bundesliga/logo-white-3.png").default} alt="Bundes Liga" className="bundesliga"/>
                    </div>
                    <div className="links" onClick={(ev)=>changeShownLeage(ev, "serie-a")}>
                        <img src={require("../../Assets/images/product/seriea/logo-white.png").default} alt="Serie A" className="seriea"/>
                    </div>
                    <div className="links" onClick={(ev)=>changeShownLeage(ev, "ligue-1")}>
                        <img src={require("../../Assets/images/product/ligue1/logo-white-3.png").default} alt="Ligue 1" className="ligue1"/>
                    </div>
                    <div className="links" onClick={(ev)=>changeShownLeage(ev, "all")}>
                        <img src={All} alt="Ligue 1" className="all"/>
                    </div>
                </div>
            </div>
            {/* show product on the right side */}
            <div className="leagues-products">
                <div className="leagues-products-wrap">
                    {(shown_league === "epl" || shown_league === "all") && (
                        <EPL/>
                    )}
                    {(shown_league === "la-liga" || shown_league === "all") && (
                        <Laliga/>
                    )}
                    {(shown_league === "bundes-liga" || shown_league === "all") && (
                        <Bundesliga/>
                    )}
                    {(shown_league === "serie-a" || shown_league === "all") && (
                        <SerieA/>
                    )}
                    {(shown_league === "ligue-1" || shown_league === "all") && (
                        <Ligue1/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Leagues;