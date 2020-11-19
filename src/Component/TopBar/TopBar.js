// top bar of web page
import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../Assets/images/section-top-bar/ball.png";
import Leagues from "../../Assets/images/section-top-bar/leagues.jpg";
import HotDeal from "../../Assets/images/section-top-bar/hotdeal.png";
import {connect} from "react-redux";

const TopBar = (props) => {
    const {dispatch} = props;
    return (
        <section className="top-bar">
            <div className="container-fluid">
                <div className="row">
                    {/* ball icon */}
                    <div className="col-3 ball-icon">
                        <div className="wrap">
                            <NavLink
                                to="/"
                                exact={true}
                                onClick = {()=>{dispatch({type: "USD"})}}
                            >
                                <img
                                    src={Logo}
                                    alt="ball-icon"
                                />
                            </NavLink>
                        </div>
                    </div>
                    {/* icons of top-5 leagues */}
                    <div className="col-6 leagues-icon">
                        <div className="wrap">
                            <NavLink
                                to="/leagues"
                                exact={true}
                            >
                                <img
                                    src={Leagues}
                                    alt="leagues-icon"
                                />
                            </NavLink>
                        </div>
                    </div>
                    {/* hot deals icon */}
                    <div className="col-3 top-bar-hot-deals">
                        <div className="wrap">
                            <NavLink
                                to="/promotion"
                                exact={true}
                            >
                                <img
                                    src={HotDeal}
                                    alt="leagues-icon"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(TopBar)