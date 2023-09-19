import React from "react";
import "./MultiForm.css";
import Card from "../Card/Card";
import RegimeForm from "../SubForm/RegimeForm";
import RestauForm from "../SubForm/RestauForm";
import PlatesForm from "../SubForm/PlatesForm";
import MealsForm from "../SubForm/MealsForm";
import { page } from "../../redux/reducers/quiz";
import { useSelector } from "react-redux";

export default function MultiForm() {
  const pages = useSelector(page);

  return (
    <div className="container-multiform">
      {pages == 0 && (
        <Card title="Aidez nous à remplir vos papilles" button="COMMENCER" />
      )}
      {pages == 1 && <RegimeForm />}
      {pages == 2 && <RestauForm />}
      {pages == 3 && <PlatesForm />}
      {pages == 4 && <MealsForm />}
      {pages == 5 && (
        <Card
          title="MERCI !"
          content="Nous pouvons maintenant vous proposer des plats en fonction de vos goûts."
        />
      )}
    </div>
  );
}
