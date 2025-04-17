import React from "react";

const Filter = ({ filters, clickHandler }) => {
  return (
    <div className="filters">
      {filters.map((filter) => {
        return (
          <div
            className="btn"
            key={filter.id}
            onClick={() => {
              clickHandler(filter.title);
            }}
          >
            {filter.title}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
