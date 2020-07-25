import React from 'react';
import './BurgerIngredient.css';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
    // eslint-disable-next-line
    let ingredient = null;

    switch (props.type) {
        case "bread-bottom":
            return ingredient = (<div className="BreadBottom"></div>)
        case "bread-top":
            return ingredient= (<div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>);
        case "tikki":
            return ingredient = (<div className="Bacon"></div>)
        case "cheese":
            return ingredient = (<div className="Cheese"></div>)
     
        case "salad":
            return ingredient = (<div className="Salad"></div>)
      
        case "alu":
            return ingredient = (<div className="Meat"></div>)
           
        default:
            return ingredient = null;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
