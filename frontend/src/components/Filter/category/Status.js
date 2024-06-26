import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ tipos, updateStatus, updatePageNumber }) => {
  
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Tipo
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {tipos.map((item, index) => (
           
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item.DESCRIPCION}
              value ={item.ID}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
