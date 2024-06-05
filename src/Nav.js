import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const obj = [
    { url: "", name: "Home", path: "/" },
    { url: "", name: "Contact", path: "/contact" },
    { url: "", name: "Task", path: "/task" },
  ];
  return (
    <div className="flex-row">
      {obj.map((e, index) => (
        <div className="navbar" key={index}>
          <ul className="unol">
            <li className="list">
              <NavLink to={e.path}>{e.name}</NavLink>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
