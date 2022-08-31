import * as types from './actionTypes';


const addDataInCartHandler = (payload) => {
    return {
        type: types.ADD_DATA_IN_CART,
        payload
    }
}
const removeDataFromCartHandler = (payload) => {
    return {
        type: types.REMOVE_DATA_FROM_CART,
        payload
    }
}
const getDiscount = () => {
    return {
        type: types.GET_DISCOUNT,
    }
}
const totalAmoun = () => {
    return {
        type: types.TOTAL_AMOUNT,
    }
}
export {addDataInCartHandler,removeDataFromCartHandler,getDiscount,totalAmoun};
