import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";

const Card = ({ page, results }) => {
  let display;
  console.log("TRAJO ESTO : " ,results)
  if (results) {
    display = results.map((x) => {
      let { ID, CORTANTE_DESCRIPCION , MEDIDA, categoria} = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${ID}`}
          key={ID}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluID`} src={`https://vicortantes.com.ar/stock/images/cortantes/${ID}.jpeg`} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-4">{CORTANTE_DESCRIPCION}</div>
              <div className="">
                <div className="fs-6 fw-normal">{categoria}</div>
                <div className="fs-5">{MEDIDA}</div>
              </div>
            </div>
          </div>

          {/* {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()} */}
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;
