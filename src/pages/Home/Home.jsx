import FeatureInfo from "../../Components/FeatureInfo/FeatureInfo";
import "./Home.css";
import Chart from "../../Components/Chart/Chart";
import {data} from '../../dummyData'
import WidgetSm from "../../Components/widgetsm/widgetsm";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}