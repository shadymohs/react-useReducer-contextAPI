export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'addNewVal' :
            return { ...state, userName: action.payLoad };
        default:
            return state;
    }
};