import React from "react";
import "./Card.css";
import { pageIncrement } from "../../redux/reducers/quiz";
import { useDispatch, useSelector } from "react-redux";
import {
  page,
  regime,
  restauration,
  dishStyle,
  preferences,
  hated,
} from "../../redux/reducers/quiz";

export default function Card(props) {
  const dispatch = useDispatch();
  const pages = useSelector(page);
  const Regime = useSelector(regime);
  const Restauration = useSelector(restauration);
  const DishStyle = useSelector(dishStyle);
  const Preferences = useSelector(preferences);
  const Hated = useSelector(hated);

  function formData() {
    if (pages === 5) {
      console.log(`Données à traitées :
        Régime alimentaire : ${Regime}, 
        Restauration préférée : ${Restauration},
        Type de plat préférés : ${DishStyle},
        Vos aliments préférés : ${Preferences},
        Les aliments que vous detestez : ${Hated}`);
    }
  }

  formData();

  return (
    <div className="card">
      <p>{props.title}</p>
      <p>{props.content}</p>
      {pages != 5 && (
        <button onClick={() => dispatch(pageIncrement())}>
          {props.button}
        </button>
      )}
    </div>
  );
}
