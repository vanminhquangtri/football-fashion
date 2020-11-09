// direct child of ProductDetail, show name, price, like times, view times
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faEye, faShareAlt} from "@fortawesome/free-solid-svg-icons";
import formatNumber from '../../GeneralModules/FortmatMoney';
import {connect} from "react-redux";

const ProductButton = (props) => {
    const {Currency} = props.Store;
    const {product} = props;
    return (
        <div className="container-fluid product-button">
            <div className="row">
                <div className="col">
                    <div className="wrap">
                        {/* general infor of product: name, price, like, view, share */}
                        <div className="name">
                            {product.name}
                        </div>
                        <div className="price">
                            {formatNumber(product.price)}{Currency.currency}
                        </div>
                        <div className="emotions">
                            <div className="like">
                                <FontAwesomeIcon icon={faHeart} className="icon"/>
                                1890
                            </div>
                            <div className="view">
                                <FontAwesomeIcon icon={faEye} className="icon"/>
                                2190
                            </div>
                            <div className="share">
                            <FontAwesomeIcon icon={faShareAlt} className="icon"/>
                                1590
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        Store: state
    }
}
export default connect(mapStateToProps)(ProductButton)