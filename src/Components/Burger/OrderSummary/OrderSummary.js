import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../Ui/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return (<li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>
                    : {props.ingredients[igKey]}
                </li>);
        })

    const didMountRef = React.useRef(false)
    React.useEffect(() => {
      if (didMountRef.current) {
        console.log("Order Summary")
      } else didMountRef.current = true
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Toatal Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default OrderSummary;
