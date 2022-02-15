import { connect } from "react-redux";
import Header from "./Header";
import { SetHeaderCurrencyActionCreator } from "../../redux/currency_reducer";

const mapStateToProps = (state) => {
  return {
    Header_Currencys: state.data.Header_Currencys,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    set_header_currency: (data) => {
      dispatch(SetHeaderCurrencyActionCreator(data));
    },
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
