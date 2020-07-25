import React,{ useState } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/Ui/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREIDIENT_PRICE = {
    tikki: 7,
    alu: 10,
    salad: 2.5,
    cheese: 4.5
}

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState({
        ingr: {
            tikki: 0,  
            cheese: 0,
            salad: 0,
            alu: 0
        }
    });

    const [price, setPrice] = useState({
        totalPrice: 10
    });

    const [disable, setDisable] = useState({
        purchase: false
    });

    const [purchasing, setPurchasing] = useState(false);

    const disableButton = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum +el
        }, 0);
        setDisable({purchase : sum > 0});
    }

    const addIngredientHandler = (type) => {
        const oldCount = ingredients.ingr[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...ingredients.ingr};
        updatedIngredients[type] = updatedCount;
        setIngredients({ingr : updatedIngredients});

        const priceAddition = INGREIDIENT_PRICE[type];
        const oldPrice = price.totalPrice;
        const newPrice = oldPrice + priceAddition;
        setPrice({totalPrice: newPrice})
        disableButton(updatedIngredients);
    };

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients.ingr[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...ingredients.ingr};
        updatedIngredients[type] = updatedCount;
        setIngredients({ingr : updatedIngredients});

        const priceSubtraction = INGREIDIENT_PRICE[type];
        const oldPrice = price.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        setPrice({totalPrice: newPrice});
        disableButton(updatedIngredients);
    };

    const purchaseHandler = () => {
        setPurchasing(true);
    }

    const disabledInfo = {
        ...ingredients.ingr
    }

    for(let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        alert('You Continue');
    }
    return (
        <Aux>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                <OrderSummary 
                price={price.totalPrice.toFixed(2)}
                ingredients={ingredients.ingr}
                purchaseCancelled={purchaseCancelHandler}
                purchaseContinued={purchaseContinueHandler}
                />
            </Modal>
            <Burger ingredients={ingredients.ingr}/>
            <BuildControls addIngredient={addIngredientHandler} 
            removeIngredient={removeIngredientHandler}
            disabled={disabledInfo}
            price={price.totalPrice.toFixed(2)}
            disableButton={disable.purchase}
            ordered={purchaseHandler}/>
        </Aux>
    );
}

export default BurgerBuilder;
