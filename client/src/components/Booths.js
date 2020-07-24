import React, { useContext, useState, useEffect } from "react";
import { FormContext } from "../context/FormContext";
import image from "../images/2020 site map png labeled.png";
import Zoom from "react-img-zoom";
import { useHistory } from "react-router";
import styles from "../css/Booths.module.css";

function Booths() {
  const {
    selectBooth,
    writeUserData,
    booths,
    updateDB,
    getBooths,
    userBoothState
  } = useContext(FormContext);

  const [whiteToggle, setWhiteToggle] = useState(false);
  const [companyToggle, setCompanyToggle] = useState(false);
  const history = useHistory();

  function goHome() {
    writeUserData();
    updateDB();
    history.push("/opvet");
  }
  useEffect(() => {
    getBooths();
  }, []);
  return (
    <div className={styles.container}>
      <Zoom
        img={image}
        zoomScale={3}
        width={800}
        height={800}
        transitionTime={0.2}
      />
      <h1 className={styles.heading} onClick={() => setWhiteToggle(prev => !prev)}>Available Booths</h1>
      <div className={styles.grid}>
      {whiteToggle
        ? booths.map(i => <div className={styles.column} onClick={() => selectBooth(i)}>{i}</div>)
        : null}
      </div>
      <h1 className={styles.heading} onClick={() => setCompanyToggle(prev => !prev)}>
        See Companies that have already registered
      </h1>
      {companyToggle
        ? userBoothState.map(i => (
            <div className={styles.regList}>
              {i.boothSelected ? i.companyName : ""} {i.boothSelected}
            </div>
          ))
        : null}

      <br></br>
      <div className={styles.btnDiv}>
      <button className={styles.submitBtn} onClick={() => goHome()}>Submit</button>
      </div>
    </div>
  );
}

export default Booths;
