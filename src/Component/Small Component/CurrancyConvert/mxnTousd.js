import React, { useState } from "react";
import style from "./CurrancyConvert.module.css";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
function MxnTousd() {
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
        <ArrowBackIcon onClick={() => navigate("/Currancy")} />
        Back
      </div>
      <div className={style.container}>
        {/* <h1>Acre to Square Feet</h1> */}
        {toggle ? (
          <div className={style.container1}>
            <h1>usd</h1>
            <input
              placeholder={`${(value2 / 18.398292).toFixed(6)}  usd`}
              onChange={(e) => setValue1(e.target.value)}
              className={style.input}
            />
          </div>
        ) : (
          <div className={style.container1}>
            <h1>Mxn</h1>
            <input
              placeholder={`${(value1 * 18.398292).toFixed(6)}  Mxn`}
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
            <h1>Mxn</h1>
            <input
              placeholder={`${(value1 * 18.398292).toFixed(6)}  Mxn`}
              onChange={(e) => setValue2(e.target.value)}
              className={style.input}
            />
          </div>
        ) : (
          <div className={style.container1}>
            <h1>usd</h1>
            <input
              placeholder={`${(value2 / 18.398292).toFixed(6)}  usd`}
              onChange={(e) => setValue1(e.target.value)}
              className={style.input}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MxnTousd;
