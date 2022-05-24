import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronLeft,
  faBriefcase,
  faSliders,
  faArrowRightFromBracket,
  faFingerprint,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faMessage,
  faChartBar,
  faArrowRi,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { ExitToAppOutlinedIcon } from "@mui/icons-material";
import Link from "next/link";

function MenuBar() {
  const [imgUrl, setImgUrl] = useState(
    "https://media-exp1.licdn.com/dms/image/C4E03AQG4fbmXatBMbQ/profile-displayphoto-shrink_100_100/0/1640010369699?e=1657756800&v=beta&t=vOQggNBgPdJeihlKjj-nMA6cI3w5ftNZ7pbgLjPLgP0"
  );
  const [activeId, setActiveId] = useState(0);
  const handleSetActiveId = (e) => {
    let id = e.target.value;
  };
  return (
    <div className="sidebar">
      <div className="sidebar-shortbox">
        <FontAwesomeIcon
          className="sidebar-shortbox-icon"
          icon={faChevronLeft}
          width={15}
          height={15}
        />
      </div>
      <div className="sidebar-container">
        <div className="user-info">
          <div className="user-image-status">
            <Image
              className="user-image"
              src={imgUrl}
              width={48}
              height={48}
            ></Image>
            <div className="user-info-status-active"></div>
          </div>
          <div className="user-info__name">Username</div>
          <div className="user-info__email">Email</div>
          <div className="user_info__activity">
            <FontAwesomeIcon
              className="activity-check-icon"
              icon={faCheck}
              style={{ color: "rgb(0, 167, 27)" }}
              width={12}
              height={12}
            />
            <div className="activity-text">
              <p>Searching</p>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <div className="sidebar-up">
            <Link href="/campaign/[id]" as={"/campaign/" + "userid"}>
              <a
                className="sidebar-button"
                value={0}
                onClick={handleSetActiveId}
              >
                <FontAwesomeIcon className="sidebar-icon" icon={faBriefcase} />
                <span className="sidebar-text">Campaigns</span>
              </a>
            </Link>
            <Link href="/prospect/[id]" as={"/prospect/" + "userid"}>
              <a
                className="sidebar-button"
                value={1}
                onClick={handleSetActiveId}
              >
                <FontAwesomeIcon
                  className="sidebar-icon"
                  icon={faAddressBook}
                />
                <span className="sidebar-text">Prospects</span>
              </a>
            </Link>
            <Link href="/inbox/[id]" as={"/inbox/" + "userid"}>
              <a
                className="sidebar-button"
                value={2}
                onClick={handleSetActiveId}
              >
                <FontAwesomeIcon className="sidebar-icon" icon={faMessage} />
                <span className="sidebar-text">Inbox</span>
              </a>
            </Link>
            <Link href="/report/[id]" as={"/report" + "userid"}>
              <a
                className="sidebar-button"
                value={3}
                onClick={handleSetActiveId}
              >
                <FontAwesomeIcon className="sidebar-icon" icon={faChartBar} />
                <span className="sidebar-text">Reports</span>
              </a>
            </Link>
            <Link href="/settings/[id]" as={"/settings" + "userid"}>
              <a
                className="sidebar-button"
                value={4}
                onClick={handleSetActiveId}
              >
                <FontAwesomeIcon className="sidebar-icon" icon={faSliders} />
                <span className="sidebar-text">Settings</span>
              </a>
            </Link>
            <div className="sidebar-separator"></div>
            <div
              className="sidebar-button"
              value={5}
              onClick={handleSetActiveId}
            >
              <FontAwesomeIcon className="sidebar-icon" icon={faBookmark} />
              <span className="sidebar-text">Templates</span>
            </div>
            <div
              className="sidebar-button"
              value={6}
              onClick={handleSetActiveId}
            >
              <FontAwesomeIcon className="sidebar-icon" icon={faAtom} />
              <span className="sidebar-text">Integrations</span>
            </div>
          </div>
          <div className="sidebar-down">
            <div className="admin sidebar-button">
              <FontAwesomeIcon className="sidebar-icon" icon={faFingerprint} />
              <span className="sidebar-text">Admin</span>
            </div>
            <div className="logout sidebar-button">
              <FontAwesomeIcon
                className="sidebar-icon"
                icon={faArrowRightFromBracket}
              />
              <span className="sidebar-text">Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
