import React from "react";
import "./SubForm.css";
import {
  hatedUpdate,
  pageDecrement,
  pageIncrement,
  preferencesUpdate,
} from "../../redux/reducers/quiz";
import { useDispatch } from "react-redux";

export default function MealsForm() {
  const dispatch = useDispatch();

  const handlePreferences = (e) => {
    dispatch(preferencesUpdate(e.target.value));
  };

  const handleHated = (e) => {
    dispatch(hatedUpdate(e.target.value));
  };

  return (
    <form className="preferences-form">
      <p>Quels sont vos aliments préférés ou détestés</p>
      <label htmlFor="preferences">
        Indiquez vos aliments préférés, séparés d'une virgule :
      </label>
      <textarea
        onChange={handlePreferences}
        type="textarea"
        name="preferences"
        id="preferences"
      />
      <label htmlFor="hated">
        Indiquez ceux que vous ne supportez pas, séparés d'une virgule :
      </label>
      <textarea
        onChange={handleHated}
        type="textarea"
        name="hated"
        id="hated"
      />
      <div className="container-nav-btns">
        <button onClick={() => dispatch(pageDecrement())}>Précédent</button>
        <button onClick={() => dispatch(pageIncrement())}>Valider</button>
      </div>
    </form>
  );
}
