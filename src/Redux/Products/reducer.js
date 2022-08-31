import * as types from './actionTypes';

const initialState = {
    cart: [],
    totalAmount:0,
    coupon:false
};

const productsReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type)
    {
        case types.ADD_DATA_IN_CART:
            
            const existingCartItemIndex = state.cart.findIndex(item => item.id === payload.id);
            const existingCartItem = state.cart[existingCartItemIndex];
            let count=0;
            if(existingCartItem)
            {    
                state.cart[existingCartItemIndex].quantity++;
                count=1;
            }
            else{
                payload.quantity=1;
                

            }
            let pay;
            if(count === 1)
            {
                pay = [...state.cart]
            
            }
            else{
                pay= [...state.cart,payload]
                
            }
            return {
               ...state,
               cart: pay,
               totalAmount: state.totalAmount + payload.price,
               coupon:false
            }
        case types.REMOVE_DATA_FROM_CART:

            let newCart = state.cart.filter((item)=> item.id!==payload.id);
            return {
                ...state,
                cart: [...newCart],
                totalAmount: state.totalAmount - (payload.price*payload.quantity),
            }
        case types.GET_DISCOUNT:

                return {
                    ...state,
                    totalAmount: state.totalAmount - 10,
                    coupon:true
                }
        case types.TOTAL_AMOUNT:
                    return {
                        ...state,
                        totalAmount:0,
                    }
        default :
            return state;   
    }
};
export {productsReducer};