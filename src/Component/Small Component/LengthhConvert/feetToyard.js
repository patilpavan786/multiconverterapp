import React, { useState } from "react";
import style from "./Common1.module.css";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
function FeetToyard() {
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
        <ArrowBackIcon onClick={() => navigate("/Length")} />
        Back
      </div>
      <div className={style.container}>
        {toggle ? (
          <div className={style.container1}>
            <h1>foot</h1>
            <input
              placeholder={`${(value2 / 3).toFixed(6)}  foot`}
              onChange={(e) => setValue1(e.target.value)}
              className={style.input}
            />
          </div>
        ) : (
          <div className={style.container1}>
            <h1>yard</h1>
            <input
              placeholder={`${(value1 * 3).toFixed(6)}  yard`}
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
            <h1>yard</h1>
            <input
              placeholder={`${(value1 * 3).toFixed(6)}  yard`}
              onChange={(e) => setValue2(e.target.value)}
              className={style.input}
            />
          </div>
        ) : (
          <div className={style.container1}>
            <h1>foot</h1>
            <input
              placeholder={`${(value2 / 3).toFixed(6)}  foot`}
              onChange={(e) => setValue1(e.target.value)}
              className={style.input}
            />
          </div>
        )}
      </div>
    </>
  );
}
export default FeetToyard;
