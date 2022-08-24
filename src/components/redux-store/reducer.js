import {CHANGETITLE, DEC, INC, RAND} from "./actionConst";


const initialState = {
    counter:0,
    text:"Изучаем Redux"
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INC:
            return {...state,counter: state.counter+1};
        case DEC:
            return {...state,counter: state.counter-1};
        case RAND:
            return {...state,counter: state.counter+action.payload};
        case "RESET":
            return {...state,counter: 0}
        case CHANGETITLE:
            return {...state,text: action.payload}

        default:
            return state;
    }
}

export default reducer;
