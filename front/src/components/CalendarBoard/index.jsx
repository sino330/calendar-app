import React from "react";
import { GridList } from "@material-ui/core";
import * as styles from "./style.css";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

const createCalender = () => {
  const firstDay = dayjs().startOf("month");
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

const calendar = createCalender();

// const calendar = [
//   "29",
//   "30",
//   "10月1日",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
//   "21",
//   "22",
//   "23",
//   "24",
//   "25",
//   "26",
//   "27",
//   "28",
//   "29",
//   "30",
//   "31",
//   "11月1日",
//   "2",
// ];
console.log(calendar);

const CalendarBoard = () => {
  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map((c) => (
          <li key={c.toISOString()}w>
            <div className={styles.element}>{c.format("D")}</div>
          </li>
        ))}
      </GridList>
    </div>
  );
};

export default CalendarBoard;
