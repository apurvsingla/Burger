import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Alu-Tikki", type: 'alu'},
    {label: "Tikki", type: 'tikki'},
    {label: "Salad", type: 'salad'},
    {label: "Cheese", type: 'cheese'}
]

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price}</strong></p>
            {controls.map(ctrl => (
                <BuildControl label={ctrl.label} key={ctrl.label} 
                    added={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button className="OrderButton"
            disabled={!props.disableButton}
            onClick={props.ordered}>ORDER NOW</button>
        </div>
    );
}

export default BuildControls;
