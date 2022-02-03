import {
 fetchShoppingList,
} from 'store/HomePage/actions';

export const getHomepageActions = () => {
    return [
        { action: fetchShoppingList, payload: {} },
    ]
}

