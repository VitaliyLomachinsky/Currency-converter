import { connect } from "react-redux";
import Convertor from "./Convertor";
import {
  ChangeValue1ActionCreator,
  ChangeValue2ActionCreator,
  ChangeCurrency1ActionCreator,
  ChangeCurrency2ActionCreator,
  SetCurrencyActionCreator,
} from "../../redux/currency_reducer";

const mapStateToProps = (state) => {
  return {
    input_value_1: state.data.input_value_1,
    input_value_2: state.data.input_value_2,
    input_currency_1: state.data.input_currency_1,
    input_currency_2: state.data.input_currency_2,
    select_data: state.data.Currencys_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_currency: (data) => {
      dispatch(SetCurrencyActionCreator(data));
    },
    change_value_1: (value) => {
      dispatch(ChangeValue1ActionCreator(value));
    },
    change_value_2: (value) => {
      dispatch(ChangeValue2ActionCreator(value));
    },
    change_currency_1: (value) => {
      dispatch(ChangeCurrency1ActionCreator(value));
    },
    change_currency_2: (value) => {
      dispatch(ChangeCurrency2ActionCreator(value));
    },
  };
};

const ConvertorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Convertor);

export default ConvertorContainer;
