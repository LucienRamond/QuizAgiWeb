import React from "react";
import "./SubForm.css";
import { pageIncrement, regimeUpdate, regime } from "../../redux/reducers/quiz";
import { useDispatch } from "react-redux";

export default function RegimeForm() {
  const dispatch = useDispatch();

  const choice = (e) => {
    dispatch(regimeUpdate(e.target.id));
  };

  return (
    <form className="diet-form">
      <p>Quel est votre régime alimentaire ?</p>
      <label htmlFor="noRegime">Pas de régime particulier</label>
      <input onChange={choice} type="radio" name="regime" id="noRegime" />
      <label htmlFor="homnivore">Homnivore</label>
      <input onChange={choice} type="radio" name="regime" id="homnivore" />
      <label htmlFor="vegetarien">Végétarien</label>
      <input onChange={choice} type="radio" name="regime" id="vegetarien" />
      <label htmlFor="vegan">Végan</label>
      <input onChange={choice} type="radio" name="regime" id="vegan" />
      <button onClick={() => dispatch(pageIncrement())}>Valider</button>
    </form>
  );
}
