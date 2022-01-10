import './MainPage.css';
import 'chart.js/auto';
import { Doughnut , Chart} from 'react-chartjs-2';
import faker from "faker"

import { data1 , data2} from "../../data"
import FadeIn from "react-fade-in";

function GraphBlock({ h, w, chart }) {
  return (
    <div className={`graph-block col-md-${w}`}>
      <h2 className="graph-text text-center">Graph</h2>
      {chart}
    </div>
  );
}


function MainPage() {
  const chart1 = <Doughnut data={data1} />
  
  const chart2 = <Chart type='bar' data={data2} />;

  return (
    <div className="MainPage">

      <div className="container">
        <div className="row">
          <h1 className="d-title text-center mt-3">
            Scum Wrapped 2021
          </h1>
        </div>
        <FadeIn>
        <div className="row">
          
            <GraphBlock w={4} chart={chart1} />
            <GraphBlock w={4} chart={chart2} />
            <GraphBlock w={3} chart={chart1} />

        </div>
        
        <div className="row">
          
            <GraphBlock w={3} chart={chart2} />
            <GraphBlock w={5} chart={chart1} />
            <GraphBlock w={3} chart={chart1} />

        </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default MainPage;
