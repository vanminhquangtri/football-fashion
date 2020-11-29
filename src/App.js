import React, {useEffect} from "react";
import {connect} from "react-redux";
import TopBar from "./Component/TopBar/TopBar";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import TopNav from "./Component/TopNav/TopNav";
import Footer from "./Component/Footer/Footer";
import RouterURL from "./Component/RouterURL/RouterURL";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";

function App() {
  var storageProductId = JSON.parse(window.localStorage.getItem('productID')) || [];
  const setPaidTarget = () => {
    localStorage.setItem('paid_target', JSON.stringify(storageProductId));
  };
  useEffect(() => {
    // hide announcement add to cart when click on annoucement
    const AddToCartAnnounce = document.querySelector(".add-to-cart-annouce");
    AddToCartAnnounce.addEventListener("click", () => {
      AddToCartAnnounce.style.right = "-100%"; 
    })
    // hide announcement update when click on annoucement
    const UpdateCartAnnounce = document.querySelector(".update-cart-annouce");
    UpdateCartAnnounce.addEventListener("click", () => {
      UpdateCartAnnounce.style.right = "-100%"; 
    })
  },[])
  return (
      <Router>
        <div className="App">
          <TopBar/>
          <TopNav/>
          <RouterURL/>
          <Footer/>
          {/* announcement displayed after click add to cart button */}
          <div className="add-to-cart-annouce top-up-annoucement">
            <div className="content">
              <div className="annouce">
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Đã thêm vào giỏ hàng thành công
              </div>
              <div className="navigate">
                <NavLink to="/shopping-cart" className="view-cart">Xem giỏ hàng</NavLink>
                <NavLink to="/check-out" className="pay-cart" 
                  onClick={()=>{
                    setPaidTarget()
                  }}
                >Thanh toán</NavLink>
              </div>
              <div className="hide-add-to-cart-top-up">
                <FontAwesomeIcon icon={faChevronCircleRight} className="icon"/>
              </div>
            </div>
          </div>
          {/* announcement displayed after click update button of component shoppingCartDetail*/}
          <div className="update-cart-annouce top-up-annoucement">
            <div className="content">
              <div className="annouce">
                <FontAwesomeIcon icon={faCheckCircle} className="icon"/>
                Đã cập nhật thành công
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
};
export default connect(mapStateToProps)(App)