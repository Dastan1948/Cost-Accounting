import './Costs.css';

import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostList from './CostList';
import { useState } from 'react';
import CostDiagram from './CostDiagram';


const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const saveYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter 
          select={selectedYear} 
          saveYearHandler={saveYearHandler} 
        />
        <CostDiagram costs={filteredCosts} />
        <CostList filteredCosts={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
