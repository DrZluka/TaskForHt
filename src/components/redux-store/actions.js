import i from "styled-components/macro";
import {CHANGETITLE, DEC, INC, RAND} from "./actionConst";




export const incActionCreator = () => {
    return {
        type: INC
    }
};

export const decActionCreator = () => {
    return {
        type: DEC
    }
}

export const randActionCreator = (value) => {
    return {
        type: RAND ,
        payload: value
    }
}

export const changeTitleCreator = (value) => {
    return {
        type: CHANGETITLE ,
        payload: value
    }
}

