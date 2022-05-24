import React, { useState } from "react";
import styles from "../../../styles/Campaign.module.css";
import FormSwitch from "../../../components/formSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlay } from "@fortawesome/free-solid-svg-icons";
import AddAction from "../../../components/addAction";

function AddCampaign({ id }) {
  const [addActionHidden, setAddActionHidden] = useState(true);
  const [showAddStep, setShowAddStep] = useState(false);
  const [step, setStep] = useState(0);
  const handleSelectSequence = () => {
    setShowAddStep(true);
  };
  const handleActionModalClosed = () => {
    setAddActionHidden(true);
  };
  const handleActionModalSaved = () => {};
  function addStep() {
    setAddActionHidden(false);
    setStep((prev) => prev + 1);
  }
  return (
    <div>
      <div className={styles.workflow}>
        <div className={styles.pageHeader}>
          <div className={styles.createTitle}>Create Campaign</div>
        </div>
        <div className={styles.updateWorkflowContainer}>
          <div className={`${styles.workflowMainInfo} page_card`}>
            <div className={styles.updateWorkflowField}>
              <div className="text-13 mb-5">
                <div className={styles.workflowOverviewItemHeader}>Name</div>
                <input
                  type="text"
                  className={styles.workflowOverviewInput}
                  placeholder="Campaign name..."
                ></input>
              </div>
              <div>
                <div className={styles.workflowOverviewSwitch}>
                  <FormSwitch />
                  <div className="text text-15">
                    LinkedIn Premium accounts only
                  </div>
                </div>
                <div className={styles.workflowOverviewSwitch}>
                  <FormSwitch />
                  <div className="text-15 text">
                    Include people I talked to before
                  </div>
                </div>
                <div className={styles.workflowOverviewSwitch}>
                  <FormSwitch />
                  <div className="text text-15">Enable link tracking</div>
                </div>
                <div className={styles.workflowOverviewSwitch}>
                  <FormSwitch />
                  <div className="text text-15">Email only campaign</div>
                </div>
              </div>
            </div>
            <div className={styles.workflowField}>
              <div className="text-13 mb-3"> Searches </div>
              <div className="primary-btn primary_btn_icon">
                <FontAwesomeIcon icon={faPlus} />
                <span>Add search</span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.workflowSequence} ${
              showAddStep ? "" : "hidden"
            }`}
          >
            <div className={styles.workflowStep}></div>
            <div className={styles.workflowAddStep} onClick={addStep}>
              <div className="primary-btn primary_btn_icon">
                <FontAwesomeIcon icon={faPlus} />
                <span className="text-white">Add step</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.workflowButtons} mt-5 mx-auto ${
            showAddStep ? "" : "hidden"
          }`}
        >
          <div
            className={`${styles.workflowButton} primary-btn text-white primary_btn_icon`}
          >
            <FontAwesomeIcon className={styles.startPlay} icon={faPlay} />
            <span className="ms-3">Start Campaign</span>
          </div>
        </div>
        <div
          className={`${styles.sequenceTypeSelect} page_card ${
            showAddStep ? "hidden" : ""
          }`}
        >
          <h2 className="text-center link">Select sequence type</h2>
          <div className={styles.sequenceTypeSelector}>
            <div
              className={styles.sequenceSelect}
              onClick={handleSelectSequence}
            ></div>
            <div className={styles.sequenceSelect}></div>
          </div>
        </div>
      </div>
      <AddAction
        hidden={addActionHidden}
        closeClicked={handleActionModalClosed}
        saveClicked={handleActionModalSaved}
      ></AddAction>
    </div>
  );
}

export default AddCampaign;
