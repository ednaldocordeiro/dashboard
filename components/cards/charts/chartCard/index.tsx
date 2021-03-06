import { ReactNode } from "react";
import Help from "../../../help";
import MenuDownloads from "./menuDownloads";

interface propsChartCard{
  title: string,
  children: ReactNode
}

export default function ChartCard({title, children}: propsChartCard){
  return(
    <div className="card radius border-0 bg-white w-100 p-3 h-100 cardChart">

      <div className="container w-100 d-flex align-items-start">
        <div className="d-flex align-items-center">
          <MenuDownloads/>
          <Help text={title}/>
        </div>
        <div className="d-flex flex-column">
          <span className="fw-bold ms-2 fs-5">
            {title} 
            <br/> 
            <span className="fw-light fs-7">Spot Price</span>
          </span>
        </div>
      </div>

      <div className="w-100 h-100 overflow-scroll">
        {children}
      </div>

    </div>
  )
}