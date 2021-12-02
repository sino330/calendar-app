import {
  schedulesSetLoading,
  schedulesFetchItem,
  schedulesAddItem,
  schedulesDeleteItem,
  schedulesAsyncFailure,
} from "./actions";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem =
  ({ month, year }) =>
  async (dispatch) => {
    dispatch(schedulesSetLoading());

    try {
      //err確認用
      // const result = await get(`schedules`);

      const result = await get(`schedules?month=${month}&year=${year}`);
      const formatedSchedule = result.map((r) => formatSchedule(r));

      dispatch(schedulesFetchItem(formatedSchedule));
    } catch (err) {
      console.error(err);
      schedulesAsyncFailure;
    }

    const result = await get(`schedules?month=${month}&year=${year}`);

    const formatedSchedule = result.map((r) => formatSchedule(r));

    dispatch(schedulesFetchItem(formatedSchedule));
  };

export const asyncSchedulesAddItem = (schedule) => async (dispatch) => {
  // loading: true にする
  dispatch(schedulesSetLoading());

  try {
    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
  } catch (err) {
    console.log(err);
    schedulesAsyncFailure;
  }
};
//getStateはthunkの関数の第2引数でstoreのdataを取得することが可能
export const asyncSchedulesDeleteItem = (id) => async (dispatch, getState) => {
  dispatch(schedulesSetLoading());
  const currentSchedules = getState().schedules.items;

  try {
    //errが起こりうる処理
    await deleteRequest(`schedules/${id}`);

    // 成功したらローカルのstateを削除
    const newSchedules = currentSchedules.filter((s) => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
  } catch (err) {
    //err処理
    console.error(err);
    dispatch(schedulesAsyncFailure(err.message));
  }
};
