import { connect } from "react-redux";

import { increment, decrement } from "../../redux/count/actions";

import Counter from "./presentation";

//storeの状態を引数として受け取って必要なものをpropsに流す。
//const mapStateProps=state=>{
  //return {count:StaticRange.count}
//}
//と同じ内容になる。
const mapStateProps = ({ count }) => ({ count });

const mapDispatchProps = (dispatch) => ({
  increment: (count) => {
    dispatch(increment(count));
  },
  decrement: (count) => {
    dispatch(decrement(count));
  },
});

export default connect(mapStateProps, mapDispatchProps)(Counter);
