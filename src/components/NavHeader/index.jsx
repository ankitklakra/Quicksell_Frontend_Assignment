import React from "react";
import "./header.css";
import DisplayDropdown from "../ActionDropdown";

function Header({ grouping, setGrouping, ordering, setOrdering }) {
  return (
    <header>
      <DisplayDropdown
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </header>
  );
}

export default Header;
