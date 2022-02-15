import s from "./Header.module.css";
import React from "react";

class Header extends React.Component {
  componentDidMount() {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.props.set_header_currency(data);
      });
  }

  render() {
    return (
      <div className={s.header}>
        <p className={s.title}>Currency converter</p>
        <div className={s.course}>
          <div className={s.course_cell}>
            <div className={s.course_cell_inside}>
              <p className={s.currency_title}>USD:</p>
              <p className={s.value}>
                {this.props.Header_Currencys.USD}{" "}
                <span className={s.value_title}>UAH</span>
              </p>
            </div>
          </div>
          <div className={s.course_cell}>
            <div className={s.course_cell_inside}>
              <p className={s.currency_title}>EUR:</p>
              <p className={s.value}>
                {this.props.Header_Currencys.EUR}{" "}
                <span className={s.value_title}>UAH</span>
              </p>
            </div>
          </div>
          <div className={s.course_cell}>
            <div className={s.course_cell_inside}>
              <p className={s.currency_title}>RUB:</p>
              <p className={s.value}>
                {this.props.Header_Currencys.RUB}{" "}
                <span className={s.value_title}> UAH</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
