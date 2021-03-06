import React, {useEffect} from 'react';
import SpecialPromotion from '../Homepage/SpecialPromotion/SpecialPromotion';

const Promotion = () => {
    useEffect(() => {
        // scroll to top
        window.scrollTo(0, 0);
        document.title = "Khuyến mãi"
    }, [])
    return (
        <section className="promotion-container">
            <SpecialPromotion/>
        </section>
    );
};

export default Promotion;