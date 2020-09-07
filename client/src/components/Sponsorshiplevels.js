import React, { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { Link, useHistory } from "react-router-dom";
import styles from "../css/Sponsorship.module.css";

function Sponsorshiplevels() {
  const {
    value,
    handleChange,
    handleSubmit,
    coupon,
    checkCoupon,
    veteranOwned,
    pushToNextPage
  } = useContext(FormContext);
  // array of sponsorlevels that we map to the page
  const sponsorArray = [
    {
      name: "Paladin",
      value: 10000,
      description:
        "O.P.V. Paladin Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Radio Endorsement TV Endorsement Vendor at Event"
    },
    {
      name: "Abrams",
      value: 5000,
      description:
        "O.P.V. Abrams Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Radio Endorsement TV Endorsement Vendor at Event"
    },
    {
      name: "Stryker",
      value: 2500,
      description:
        "O.P.V. Stryker Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Radio Endorsement Vendor at Event"
    },
    {
      name: "Bradley",
      value: 1000,
      description:
        "O.P.V. Bradley Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers Logo on Event Shirts Swag Distribution Vendor at Event"
    },
    {
      name: "AMTRACK",
      value: 500,
      description:
        "O.P.V. Amtrak Level Sponsorship Website Sponsorship Social Announcement Recognition at Event Logo on Event Flyers"
    },
    {
      name: "WLA",
      value: 250,
      description:
        "O.P.V. WLA Level Sponsorship Website Sponsorship Social Announcement Recognition at Event"
    }
  ];
  const history = useHistory();
  const [toggle, setToggle] = useState(false);
  function addtoDB() {
    veteranOwned ? pushToNextPage() : history.push("/form5");
  }

  return (
    <div>
      <div className={styles.levelContainer}>
        <div>
          <h1>Sponsorship Level</h1>

          <div className={styles.grid}>
            {sponsorArray.map(item => (
              <div
                className={styles.card}
                onClick={() => handleSubmit(item.value)}
                key={item.name}
              >
                <h1>{item.name}</h1>
                <p>{item.value}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.qty}></div>
          <p>Total: {value}</p>

          {!toggle ? (
            <div className={styles.aTag} onClick={() => setToggle(prev => !prev)}>
              {/* add something to add more visual fidelity to "here" make it look clickable*/}
              have a coupon code? Enter it here
            </div>
          ) : (
            <div className={styles.coupon}>
              <input
                type="text"
                name="coupon"
                value={coupon}
                onChange={handleChange}
              ></input>
              <button className={styles.couponBtn} onClick={() => checkCoupon(coupon)}>Submit</button>
            </div>
          )}
          <br></br>
          <div className={styles.btn}>
            <Link to="/form3">
              <button className={styles.backBtn}>Back</button>
            </Link>
            <button className={styles.contBtn} onClick={() => addtoDB()}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsorshiplevels;
