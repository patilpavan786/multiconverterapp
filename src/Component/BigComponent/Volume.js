import React, { useState } from "react";
import style from "./Common.module.css";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useNavigate } from "react-router-dom";


function Volume() {
  const navigate = useNavigate()
  let data3 = [
    {
      srno: "1",
      unit1: "litres",
      unit2: "gallons",
    },
    {
      srno: "2",
      unit1: "ml",
      unit2: "cups",
    },
  
    {
      srno: "3",
      unit1: "tablespoons",
      unit2: "cups",
    },
    {
      srno: "4",
      unit1: "ml",
      unit2: "liter",
    },
    {
      srno: "5",
      unit1: "cubic feet",
      unit2: "gallon",
    },
    {
      srno: "6",
      unit1: "gallon",
      unit2: "ml",
    },
  
  ];
  const [newdata, setNewData] = useState(data3);

  return (
    <div>
      {newdata.map((x, index) => {
        return (
          <div key={x.index} className={style.containerArea}>
            <div  className={style.areaContainer}>
              <div className={style.areaContainer1}>
                <p>{x.srno}</p>
                <p>{x.unit1}</p>
                <CompareArrowsIcon />
                <p>{x.unit2}</p>
              </div>
              <p className={style.arrow}>
           {x.icon}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Volume
