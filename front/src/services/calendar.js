import dayjs from "dayjs";

export const createCalendar = (month) => {
  // 今月の最初の日を追加
  const firstDay = getMonth(month);

  const firstDayIndex = firstDay.day();
  //Array(35)だけだと空の特殊ななオブジェクトになるので0で初期化する必要がある
  return Array(35)
    .fill(0)
    .map((_, i) => {
      const diffFromFirstDay = i - firstDayIndex;
      const day = firstDay.add(diffFromFirstDay, "day");

      return day;
    });
};

export const getMonth = ({ year, month }) => {
  return dayjs(`${year}-${month}`);
};

export const isSameDay = (d1, d2) => {
  const format = "YYYYMMDD";
  return d1.format(format) === d2.format(format);
};

export const isSameMonth = (m1, m2) => {
  const format = "YYYYMM";
  return m1.format(format) === m2.format(format);
};

export const isFirstDay = (day) => day.date() === 1;

export const getNextMonth = (month) => {
  const day = getMonth(month).add(1, "month");
  return formatMonth(day);
};

export const getPreviousMonth = (month) => {
  const day = getMonth(month).add(-1, "month");
  return formatMonth(day);
};

export const formatMonth = (day) => ({
  month: day.month() + 1,
  year: day.year(),
});

// // ==========ここから編集する==========
// const getMonthStateCreator = diff => month => {
//   const day = getMonth(month).add(diff, "month");
//   return formatMonth(day);
// };

// export const getNextMonth = getMonthStateCreator(1);
// export const getPreviousMonth = getMonthStateCreator(-1);
// // ==========ここまで編集する==========

// export const formatMonth = day => ({
//   month: day.month() + 1,
//   year: day.year()
// });
