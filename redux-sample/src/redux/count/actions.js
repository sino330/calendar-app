import {INCREMENT,DECREMENT} from "./constants"

export const increment=playload=>({
    type:INCREMENT,
    playload
})

export const decrement=playload=>({
    type:DECREMENT,
    playload
})