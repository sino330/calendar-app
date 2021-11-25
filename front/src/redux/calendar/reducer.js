import dayjs from "dayjs";
import { CALENDAR_SET_MONTH } from "./action";

const day = dayjs();

const init = {
  year: day.year(),
  month: day.month() + 1,
};

const calendarReducer = (state = init, action) => {
    const {type,playload}=action;
    switch(type){
        case CALENDAR_SET_MONTH:
            return playload;
            default:
                return state
    }
}

export default calendarReducer;