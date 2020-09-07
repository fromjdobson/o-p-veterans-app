import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import image from "../images/OPVeteran2020sitemap.jpg";
import Zoom from "react-img-zoom";
import { useHistory } from "react-router";
import styles from "../css/Booths.module.css";

function Booths() {
  const {
    selectBooth,
    writeUserData,
    availableBooths,
    updateDB,
    userBoothState, 
    boothSelected
  } = useContext(FormContext);

  const [whiteToggle, setWhiteToggle] = useState(false);
  const [companyToggle, setCompanyToggle] = useState(false);
  const history = useHistory();

  function goHome() {
    // userData gets written to the DB
    writeUserData();
    // Updates booth array without the booth the user selected 
    updateDB();
    history.push("/profile");
  }
  // useEffect(() => {
  //   getBooths();
  // }, []);
  return (
    <div className={styles.container}>
      {/* NPM package for zooming into images */}
      <Zoom
        img={image}
        zoomScale={3}
        width={800}
        height={800}
        transitionTime={0.2}
      />
      {/* setWhiteToggle is just a toggle function to show the booths */}
      <h1 className={styles.heading} onClick={() => setWhiteToggle(prev => !prev)}>Available Booths</h1>
      <div className={styles.grid}>
        {/* shows all of the booths  */}
      {whiteToggle
        ? availableBooths.booths.map(i => <div className={styles.column} onClick={() => selectBooth(i)}>{i}</div>)
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
        {
          boothSelected ? 
            <button 
              className={styles.submitBtn} 
              onClick={() => goHome()}
            >
              Submit
            </button> 
            : 
            <button 
              className={styles.submitBtn} 
              onClick = {() => alert("Please Select a booth")}
            >
                Submit
            </button>
        }
      
      </div>

    </div>
  );
}

export default Booths;
