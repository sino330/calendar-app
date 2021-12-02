import { isSameDay } from "./calendar";
import dayjs from "dayjs";

export const setSchedules = (calendar, schedules) =>
  calendar.map((c) => ({
    date: c,
    schedules: schedules.filter((e) => isSameDay(e.date, c)),
  }));

  export const formatSchedule = (schedule) => ({
    ...schedule,
    date: dayjs(schedule.date),
  });

  export const isCloseDialog = (schedule) => {
    const message = "保存されていない変更を破棄しますか？";

    return isScheduleEmpty(schedule) || window.confirm(message);
  };
  //上記同様。
  // const isCloseDialog = (schedule) => {
  //   const message = "保存されていない変更を破棄しますか？";

  //   if (isScheduleEmpty(schedule)) {
  //     return true;
  //   } else {
  //     return window.confirm(message);
  //   }
  // };

  //!schedule.titleはschedule.title === "" || schedule.title === null || schedule.title === undefinedと同義。
  const isScheduleEmpty = (schedule) =>
    !schedule.title && !schedule.description && !schedule.location;