import s from "./ConvertorItem.module.css";
import React from "react";

const ConvertorItem = (props) => {
  let input_ref = React.createRef();
  let select_ref = React.createRef();

  return (
    <form className={s.form}>
      <input
        className={s.input}
        onChange={() => {
          props.change_value(input_ref.current.value);
        }}
        value={props.input_value}
        ref={input_ref}
      ></input>

      <select
        className={s.select}
        defaultValue={"CAD"}
        value={props.input_currency}
        onChange={() => {
          props.change_currency(select_ref.current.value);
        }}
        ref={select_ref}
      >
        {props.data}
      </select>
    </form>
  );
};

export default ConvertorItem;
