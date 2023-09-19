import React from "react";
import "./SubForm.css";
import {
  pageIncrement,
  pageDecrement,
  dishStyle,
  dishStyleRemove,
  dishStyleAdd,
} from "../../redux/reducers/quiz";
import { useDispatch, useSelector } from "react-redux";

export default function PlatesForm() {
  const dispatch = useDispatch();
  const dishArr = useSelector(dishStyle);

  const handleInput = (e) => {
    if (e.target.checked & !dishArr.includes(e.target.id)) {
      dispatch(dishStyleAdd(e.target.id));
    } else {
      let index = dishArr.indexOf(e.target.id);
      dispatch(dishStyleRemove(index));
    }
  };

  return (
    <form className="checkbox-form">
      <p>Quel type de plat preférez vous ?</p>
      <label htmlFor="cassoulet">Cassoulet</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="dishStyle"
        id="cassoulet"
      />
      <label htmlFor="couscous">Couscous</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="dishStyle"
        id="couscous"
      />
      <label htmlFor="paella">Paëlla</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="dishStyle"
        id="paella"
      />
      <label htmlFor="moulesFrites">Moules frites</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="dishStyle"
        id="moulesFrites"
      />
      <label htmlFor="choucroute">Choucroute</label>
      <input
        onChange={handleInput}
        type="checkbox"
        name="dishStyle"
        id="choucroute"
      />
      <div className="container-nav-btns">
        <button onClick={() => dispatch(pageDecrement())}>Précédent</button>
        <button onClick={() => dispatch(pageIncrement())}>Valider</button>
      </div>
    </form>
  );
}
