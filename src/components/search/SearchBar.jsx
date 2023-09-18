import React from "react";
import "./SearchBar.css";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function SearchBar({ functionSearch }) {
  
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  return (<>
    <span className="searchBox">
      <input
        className="searchInput"
        type="text"
        placeholder="What product or service do you need?"
        id="searchString"
        onChange={functionSearch}
      />
      <button
        className="filterButton"
        onClick={handleShow}
      >
        <FiMenu />
      </button>
    </span>
    { show ? <div className="dropdown">

    <input className="filterMenuPriceField" id="MaxPrice" name="MaxPrice" type="number" onChange={functionSearch}></input>
    <label className="filterLabel" > MaxPrice</label>

    <input className="filterMenuPriceField" id="Vendor" name="Vendor" onChange={functionSearch}></input>
    <label className="filterLabel" > Vendor</label>

    </div> : null}
    </>
  );
}