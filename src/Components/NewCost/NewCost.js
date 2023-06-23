import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const [formVisible, setFormVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };

  const addVisibleHandler = (event) => {
    if (formVisible === false && btnVisible === true) {
      setFormVisible(true);
      setBtnVisible(false);
    } else if (formVisible === true && btnVisible === false) {
      setFormVisible(false);
      setBtnVisible(true);
    }
  };

  return (
    <div className="new-cost">
      {btnVisible && (
        <button onClick={addVisibleHandler}>
          Добавить Новый Расход
        </button>
      )}
      {formVisible && (
        <CostForm
          addVisibleHandler={addVisibleHandler}
          onSaveCostData={saveCostDataHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
