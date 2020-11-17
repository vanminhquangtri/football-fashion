import React, {useEffect} from "react";
import TopBar from "./Component/TopBar/TopBar";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import TopNav from "./Component/TopNav/TopNav";
import Footer from "./Component/Footer/Footer";
import RouterURL from "./Component/RouterURL/RouterURL";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";

function App(props) {
  const {dispatch} = props;
  useEffect(() => {
    // show announcement when add to cart
    const AddToCartAnnounce = document.querySelector(".add-to-cart-annouce");
    AddToCartAnnounce.addEventListener("click", () => {
      AddToCartAnnounce.style.right = "-100%"; 
    })
  },[])
  return (
      <Router>
        <div className="App">
          <TopBar/>
          <TopNav/>
          <RouterURL/>
          <Footer/>
          <div className="add-to-cart-annouce">
            <div className="content">
              <div className="annouce">
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Đã thêm vào giỏ hàng thành công
              </div>
              <div className="navigate">
                <NavLink to="/shopping-cart" className="view-cart">Xem giỏ hàng</NavLink>
                <NavLink to="/check-out" className="pay-cart" onClick={()=>{dispatch({type: "PAY_WHOLE_CART"})}}>Thanh toán</NavLink>
              </div>
              <div className="hide-add-to-cart-top-up">
                <FontAwesomeIcon icon={faChevronCircleRight} className="icon"/>
              </div>
            </div>
          </div>
        </div>
      </Router>
  );
};
const mapStateToProps = (state) => {
  return {
      Store: state
  }
}
export default connect(mapStateToProps)(App)