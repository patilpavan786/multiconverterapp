import React, { useState } from "react";
import style from "./WeightConvert.module.css";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
function ToneTolbs() {
  let navigate = useNavigate();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setValue1("");
    setValue2("");
    setToggle(!toggle);
  };

  return (
    <>
      <div
        style={{
          margin: "1.5rem",
          display: "flex",
          fontSize: "1.2rem",
          alignContent: "center",
        }}
      >
        <ArrowBackIcon onClick={() => navigate("/Weight")} />
        Back
      </div>
      <div className={style.container}>
        {toggle ? (
          <div className={style.container1}>
            <h1>ton(metric)</h1>
            <input
              placeholder={`${(value2 / 2204.6226218).toFixed(6)}  ton(metric)`}
              onChange={(e) => setValue1(e.target.value)}
              className={style.input}
            />
          </div>
        ) : (
          <div className={style.container1}>
            <h1>lbs</h1>
            <input
              placeholder={`${(value1 * 2204.6226218).toFixed(6)}  lbs`}
              onChange={(e) => setValue2(e.target.value)}
              className={style.input}
            />
          </div>
        )}
        <p
          className={style.icon}
          onClick={handleClick}
          style={{ fontSize: "4rem" }}
        >
          <CompareArrowsIcon />
        </p>
        {toggle ? (
          <div className={style.container1}>
            <h1>lbs</h1>
            <input
              placeholder={`${(value1 * 2204.6226218).toFixed(6)}  lbs`}
              onChange={(e) => setValue2(e.target.value)}
              className={style.input}
            />
          </div>
        ) : (
          <div className={style.container1}>
            <h1>ton(metric)</h1>
            <input
              placeholder={`${(value2 / 2204.6226218).toFixed(6)}  ton(metric)`}
              onChange={(e) => setValue1(e.target.value)}
              className={style.input}
            />
          </div>
        )}
      </div>
    </>
  );
}
export default ToneTolbs;
