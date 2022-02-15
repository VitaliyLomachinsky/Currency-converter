import initialState from "./initialState";
const SET_HEADER_CURRENCY = "SetHeaderCurrency";
const SET_CURRENCY = "SetCurrency";
const CHANGE_VALUE_1 = "ChangeValue1";
const CHANGE_VALUE_2 = "ChangeValue2";
const CHANGE_CURRENCY_1 = "ChangeCurrency1";
const CHANGE_CURRENCY_2 = "ChangeCurrency2";

const currency_reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HEADER_CURRENCY: {
      let Header_Currencys = { USD: 0, EUR: 0, RUB: 0 };
      let UAH = {
        r030: 1,
        txt: "Українська гривня",
        rate: 1,
        cc: "UAH",
        exchangedate: action.data[0].exchangedate,
      };
      action.data.find((el) => {
        if (el.cc == "USD") {
          Header_Currencys.USD = el.rate;
        }
        if (el.cc == "EUR") {
          Header_Currencys.EUR = el.rate;
        }
        if (el.cc == "RUB") {
          Header_Currencys.RUB = el.rate;
        }
      });

      return {
        ...state,
        Header_Currencys,
        Currencys_data: [...action.data, UAH],
      };
    }
    case SET_CURRENCY: {
      let set_array = [
        {
          r030: 1,
          txt: "Українська гривня",
          rate: 1,
          cc: "UAH",
          exchangedate: action.data[0].exchangedate,
        },
      ];

      action.data.find((el) => {
        if (
          el.cc == "UAH" ||
          el.cc == "USD" ||
          el.cc == "EUR" ||
          el.cc == "RUB" ||
          el.cc == "PLN" ||
          el.cc == "TRY"
        ) {
          set_array.push(el);
        }
      });

      return { ...state, Currencys_data: set_array };
    }

    case CHANGE_VALUE_1: {
      let temp_rate_first;
      let temp_rate_second;

      state.Currencys_data.find((el) => {
        if (el.cc == state.input_currency_1) {
          temp_rate_first = el.rate;
        }
        if (el.cc == state.input_currency_2) {
          temp_rate_second = el.rate;
        }
      });

      let temp = (action.value * temp_rate_first) / temp_rate_second;

      return {
        ...state,
        input_value_1: action.value,
        input_value_2: temp,
      };
    }
    case CHANGE_VALUE_2: {
      let temp_rate_first;
      let temp_rate_second;

      state.Currencys_data.find((el) => {
        if (el.cc == state.input_currency_1) {
          temp_rate_first = el.rate;
        }
        if (el.cc == state.input_currency_2) {
          temp_rate_second = el.rate;
        }
      });

      let temp = (action.value * temp_rate_second) / temp_rate_first;

      return {
        ...state,
        input_value_1: temp,
        input_value_2: action.value,
      };
    }
    case CHANGE_CURRENCY_1: {
      let temp_rate_first;
      let temp_rate_second;

      state.Currencys_data.find((el) => {
        if (el.cc == action.value) {
          temp_rate_first = el.rate;
        }
        if (el.cc == state.input_currency_2) {
          temp_rate_second = el.rate;
        }
      });

      let temp = (state.input_value_1 * temp_rate_first) / temp_rate_second;

      return {
        ...state,
        input_value_1: state.input_value_1,
        input_value_2: temp,
        input_currency_1: action.value,
      };
    }
    case CHANGE_CURRENCY_2: {
      let temp_rate_first;
      let temp_rate_second;

      state.Currencys_data.find((el) => {
        if (el.cc == state.input_currency_1) {
          temp_rate_first = el.rate;
        }
        if (el.cc == action.value) {
          temp_rate_second = el.rate;
        }
      });

      let temp = (state.input_value_2 * temp_rate_second) / temp_rate_first;

      return {
        ...state,
        input_value_1: temp,
        input_value_2: state.input_value_2,
        input_currency_2: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export const SetHeaderCurrencyActionCreator = (data) => ({
  type: SET_HEADER_CURRENCY,
  data,
});
export const SetCurrencyActionCreator = (data) => ({
  type: SET_CURRENCY,
  data,
});
export const ChangeValue1ActionCreator = (value) => ({
  type: CHANGE_VALUE_1,
  value,
});
export const ChangeValue2ActionCreator = (value) => ({
  type: CHANGE_VALUE_2,
  value,
});
export const ChangeCurrency1ActionCreator = (value) => ({
  type: CHANGE_CURRENCY_1,
  value,
});
export const ChangeCurrency2ActionCreator = (value) => ({
  type: CHANGE_CURRENCY_2,
  value,
});

export default currency_reducer;
