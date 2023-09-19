import React from "react";
import "./SubForm.css";
import {
  pageIncrement,
  pageDecrement,
  restauration,
  restaurationAdd,
  restaurationRemove,
} from "../../redux/reducers/quiz";
import { useDispatch, useSelector } from "react-redux";

export default function RestauForm() {
  const dispatch = useDispatch();
  const restauArr = useSelector(restauration);

  const handleInput = (e) => {
    if (e.target.checked & !restauArr.includes(e.target.id)) {
      dispatch(restaurationAdd(e.target.id));
    } else {
      let index = restauArr.indexOf(e.target.id);
      dispatch(restaurationRemove(index));
    }
  };

  return (
    <form className="checkbox-form">
      <p>Quel de restauration preférez vous ?</p>
      <label htmlFor="italy">Italienne</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="foodStyle"
        id="italy"
      />
      <label htmlFor="japanese">Japonaise</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="foodStyle"
        id="japanese"
      />
      <label htmlFor="french">Française</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="foodStyle"
        id="french"
      />
      <label htmlFor="chinese">Chinoise</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="foodStyle"
        id="chinese"
      />
      <label htmlFor="indian">Indienne</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="foodStyle"
        id="indian"
      />
      <div className="container-nav-btns">
        <button onClick={() => dispatch(pageDecrement())}>Précédent</button>
        <button onClick={() => dispatch(pageIncrement())}>Valider</button>
      </div>
    </form>
  );
}
