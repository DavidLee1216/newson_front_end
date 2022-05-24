import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CirclePlus from "../assets/img/circle-plus.svg";
import UserPlus from "../assets/img/user-plus.svg";
import SendMessage from "../assets/img/send-message.svg";
import InfoIcon from "../assets/img/info.svg";
import SendMail from "../assets/img/send-mail.svg";
import EnrichProfile from "../assets/img/diamond.svg";
import Webhook from "../assets/img/webhook.svg";
import Edit from "../assets/img/edit.svg";
import UserDetail from "../assets/img/user-detail.svg";
import UserPin from "../assets/img/user-pin.svg";
import styles from "../styles/Campaign.module.css";

function LeftBlockButtons() {
  const tips = [
    "Send a prospect a connection request and add a message to encourage them to accept.",
    "Send a message to a prospect. You`ll only be able to send a message if the prospect has accepted your connection request.",
    "Send an InMail message within Linkedin. Messages will only be sent to those profiles that are open and will not use your In Mail credits. In Mail messages can only be sent to those prospects you are not connected with.",
    "These are soft touch points to have your name appear in the prospects notifications.",
    "Send a connection request to the prospect's email. It's suggested that you enrich the profile first before sending an email. Be sure your email is also integrated within Bespoke Leads.",
  ];
  const titles = [
    "Send Connection Request",
    "Send Message",
    "Send InMain",
    "Perform Action",
    "Send Connection By Email",
  ];
  const images = [
    <UserPlus width={20} height={20} />,
    <SendMessage width={20} height={20} />,
    <Edit width={20} height={20} />,
    <UserDetail width={20} height={20} />,
    <UserPin width={20} height={20} />,
  ];
  return (
    <>
      {images.map((e, i) => {
        return (
          <div className={styles.button_block} key={i}>
            <div className={styles.button_plus_icon}>
              <CirclePlus width={20} height={20} />
            </div>
            <div className={styles.buttons_button_wrap}>
              <div className={styles.kek}>{images[i]}</div>
              <div className={styles.buttons_button}>
                <div className={styles.buttons_text_block}>
                  <span className={styles.buttons_text}>{titles[i]}</span>
                </div>
                <div className="hover-tip right d-flex align-items-center me-3">
                  <InfoIcon
                    className={styles.info_circle}
                    width={20}
                    height={20}
                  />
                  <div className="hover-tip-body">
                    <div className="hover-tip-triangle"></div>
                    <div className="hover-info">
                      <div className="hover-info-text">{tips[i]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function EmailAutomationButtons() {
  const tips = [
    "Send an email to a prospect. It's suggested that you enrich the profile before you send an email. Be sure your email is also integrated within Bespoke Leads.",
    "Enrich a profile to potentially find the best email and phone number for your prospect. A credit will only be deducted if we are successful in enriching the profile.",
  ];
  const titles = ["Send Email", "Enrich Profile"];
  const images = [
    <SendMail width={20} height={20} />,
    <EnrichProfile width={20} height={20} />,
  ];
  return (
    <>
      {images.map((v, i) => {
        return (
          <div className={styles.button_block} key={i}>
            <div className={styles.button_plus_icon}>
              <CirclePlus width={20} height={20} />
            </div>
            <div className={styles.buttons_button_wrap}>
              <div className={styles.kek}>{images[i]}</div>
              <div className={styles.buttons_button}>
                <div className={styles.buttons_text_block}>
                  <span className={styles.buttons_text}>{titles[i]}</span>
                </div>
                <div className="hover-tip right d-flex align-items-center me-3">
                  <InfoIcon
                    className={styles.info_circle}
                    width={20}
                    height={20}
                  />
                  <div className="hover-tip-body">
                    <div className="hover-tip-triangle"></div>
                    <div className="hover-info">
                      <div className="hover-info-text">{tips[i]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function IntegrationButtons() {
  const tips = ["Automate a process externally using a webhook."];
  const titles = ["Send Webhook"];
  const images = [<Webhook width={20} height={20} />];
  return (
    <>
      {images.map((v, i) => {
        return (
          <div className={styles.button_block} key={i}>
            <div className={styles.button_plus_icon}>
              <CirclePlus width={20} height={20} />
            </div>
            <div className={styles.buttons_button_wrap}>
              <div className={styles.kek}>{images[i]}</div>
              <div className={styles.buttons_button}>
                <div className={styles.buttons_text_block}>
                  <span className={styles.buttons_text}>{titles[i]}</span>
                </div>
                <div className="hover-tip right d-flex align-items-center me-3">
                  <InfoIcon
                    className={styles.info_circle}
                    width={20}
                    height={20}
                  />
                  <div className="hover-tip-body">
                    <div className="hover-tip-triangle"></div>
                    <div className="hover-info">
                      <div className="hover-info-text">{tips[i]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
function AddAction({ hidden, closeClicked, saveClicked }) {
  return (
    <div
      className={`${styles.wrapperAddAction} ${hidden ? "hidden" : ""}`}
      onClick={closeClicked}
    >
      <div className={styles.wrapperRelativeBox}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="modal-title-block">
            <div className="modal-title">Add Action</div>
            <FontAwesomeIcon
              className="modal-close"
              icon={faXmark}
              onClick={closeClicked}
            />
          </div>
          <div className={styles.addActionButtons}>
            <div className={styles.addActionBlock}>
              <span className={styles.addActionBlockTitle}>
                LinkedIn Automation
              </span>
              <LeftBlockButtons />
            </div>
            <div className={styles.addActionRightBlock}>
              <div className={`${styles.addActionBlock} mb-5`}>
                <span className={styles.addActionBlockTitle}>
                  Email Automation
                </span>
                <EmailAutomationButtons />
              </div>
              <div className={styles.addActionBlock}>
                <span className={styles.addActionBlockTitle}>Integrations</span>
                <IntegrationButtons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAction;
