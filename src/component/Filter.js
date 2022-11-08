import React from "react";
import { recommendStatus, recommendRating } from "../utlis/filterData";
import DropDownButton from "./DropDownButton";
const Filter = ({ sortByStatus, sortByRating }) => {
  return (
    <div className="d-flex align-items-center justify-content-center gap-3">
     
      <div className="dropdown">
        <DropDownButton name="Recommendate Status" />
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {recommendStatus.map((item, index) => (
            <>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => sortByStatus(item.status)}
                >
                  {item.name}
                </p>
              </li>
              {index !== recommendStatus.length - 1 && (
                <li>
                  <hr className="dropdown-divider" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="dropdown">
        {/* <DropDownButton name="Search by Rating" /> */}
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          {recommendRating.map((item, index) => (
            <>
              <li>
                <p
                  className="dropdown-item"
                  onClick={() => sortByRating(item.status)}
                >
                  {item.name}
                </p>
              </li>
              {index !== recommendRating.length - 1 && (
                <li>
                  <hr className="dropdown-divider" />
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;