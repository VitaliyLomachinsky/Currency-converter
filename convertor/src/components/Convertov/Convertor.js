import s from "./Convertor.module.css";
import ConvertorItem from "./ConvertorItem/ConvertorItem";
import up_down_image from "./strelka.png";
import React from "react";

class Convertor extends React.Component {
  componentDidMount() {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.props.set_currency(data);
      });
  }

  render() {
    let select_all_data = this.props.select_data.map((item) => {
      if (item.cc == "USD") {
        return <option value={item.cc}>{item.cc} </option>;
      } else {
        return <option value={item.cc}>{item.cc} </option>;
      }
    });

    return (
      <div className={s.convertor}>
        <div className={s.form}>
          <h2 className={s.form_title}>Conversion window</h2>
          <ConvertorItem
            input_value={this.props.input_value_1}
            change_value={this.props.change_value_1}
            input_currency={this.props.input_currency_1}
            change_currency={this.props.change_currency_1}
            data={select_all_data}
          />

          <img src={up_down_image} className={s.up_down_image}></img>

          <ConvertorItem
            input_value={this.props.input_value_2}
            change_value={this.props.change_value_2}
            input_currency={this.props.input_currency_2}
            change_currency={this.props.change_currency_2}
            data={select_all_data}
          />
        </div>
      </div>
    );
  }
}

export default Convertor;
