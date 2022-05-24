import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/img/logo.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const handleSpaceInfoClick = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <nav className="nav-header">
      <Image src={logo} width={50} height={50} />
      <div className="nav-right d-flex">
        <div id="notificationButton" className="header-notification-button">
          <FontAwesomeIcon
            className="notification_bell"
            icon={faBell}
            width={24}
            height={24}
          />
        </div>
        <div className="space-tooltip">
          <div className="space-info" onClick={handleSpaceInfoClick}>
            <div className="space-info__info d-flex flex-column">
              <p className="space-info__name">username</p>
              <p className="space-info__email">email address</p>
            </div>
            <FontAwesomeIcon
              className={`arrow ${dropdown ? "up" : ""}`}
              icon={faChevronDown}
              width={16}
              height={16}
            />
          </div>
          <div className="tooltip-block"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
