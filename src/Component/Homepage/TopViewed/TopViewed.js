/** @jsxRuntime classic */ // fix problem "pragma and pragmaFrag cannot be set when runtime is automatic"
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ProductInfo from "../../../Data/ProductInfo";
const TopViewed = () => {
    return (
        <section className="top-viewed">
            <div className="container-fluid">
                <div className="row">
                    {ProductInfo.map((product) => {
                        if (product.top_viewed) {
                            return (
                                /* only render product having property top_viewed true, each product is a col */
                                <div className="col" key={product.id}>
                                    <div className="wrap">
                                        <div 
                                            className="background-image"
                                            css={css`
                                                background-image: url(${product.main_image.default})
                                            `}
                                        ></div>
                                        <div className="info">
                                            <span className="name">{product.name}</span>
                                        </div>
                                    </div>                        
                                </div>
                            )
                        }
                        return "";
                    })}
                </div>
            </div>
        </section>
    );
};

export default TopViewed;