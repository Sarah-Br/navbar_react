import React from "react";

function Navbar(props) {

  return (
    <ul className="navlist">
      {props.menu.map((el, i) => (
        <li className="dropdown-list" key={i}>
          {el.title}
          {el.drop && (
            <ul className="dropdown">
              {el.drop.map((el, i) => (
                <li key={i}> {el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
export default Navbar;
