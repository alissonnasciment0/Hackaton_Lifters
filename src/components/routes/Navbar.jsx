import React, { useState } from "react";
import style from "../Navbar.module.css";
import { BsGithub, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export function Navbar() {
  const [showDevOptions, setShowDevOptions] = useState(false);

  const handleDevHover = () => {
    setShowDevOptions(true);
  };

  const handleDevLeave = () => {
    setShowDevOptions(false);
  };

  return (
    <div>
      <nav className={style.navbar}>
        <li className={style.homebutton}>
          <Link to="/">Home</Link>
        </li>

        <ul>
          <li className={style.contato}>
            <Link to="/contact">Contato</Link>
          </li>

          <li className={style.sobre}>
            <Link to="/info">Sobre</Link>
          </li>

          <li className={style.developers}>
            <a
              href="#"
              onMouseEnter={handleDevHover}
             
              className={`${style.developers} ${
                showDevOptions ? style.active : ""
              }`}
            >
              {" "}
              Developers{" "}
              <span className={style.chevronIcon}>
                {" "}
                {showDevOptions ? <BsChevronUp /> : <BsChevronDown />}
              </span>
            </a>

            {showDevOptions && (
              <ul className={style.lista} onMouseLeave={handleDevLeave}>
                <li>
                  <a href="https://github.com/pauloabrantesii" target="_blank">
                    {" "}
                    <BsGithub /> &nbsp; Paulo
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/alissonnasciment0"
                    target="_blank"
                  >
                    <BsGithub /> &nbsp;Alisson
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Othonnery00" target="_blank">
                    <BsGithub /> &nbsp;Othon
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsGithub /> &nbsp;Arthur
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
