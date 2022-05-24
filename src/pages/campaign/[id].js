import React from "react";
import styles from "../../styles/Campaign.module.css";
import FormSwitch from "../../components/formSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightAndDownLeftFromCenter,
  faEllipsis,
  faChevronRight,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/router";

function WorkflowRow() {
  return (
    <div className={styles.myWorkflowsTableRow}>
      <div className={styles.myWorkflowsItemContent}>
        <div className={`${styles.row}`}>
          <div className={styles.workflowItemName}>
            <FormSwitch />
            <span className={styles.row}>
              <h2>Campaign name</h2>
            </span>
          </div>
          <div className={`${styles.workflowItemInformation} ${styles.row}`}>
            <div className={styles.workflowItemButton}>
              <FontAwesomeIcon
                className={styles.expandIcon}
                icon={faEllipsis}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.row}`}>
          <div className={styles.workflowItemExpand}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          <div className={styles.workflowItemStatistics}>
            <div className={styles.workflowItemSteps}>
              <div className={styles.workflowItemStep}>
                <div className={styles.stepName}>
                  <span
                    className={styles.stepCircle}
                    style={{ backgroundColor: "rgb(153, 169, 198)" }}
                  ></span>
                  <span>New</span>
                </div>
                <div className={styles.stepValue}>
                  54<span className={styles.stepDelta}>+54</span>
                </div>
                <div className={styles.stepTip}></div>
              </div>
              <div className={styles.workflowItemStep}>
                {" "}
                <div className={styles.stepName}>
                  <span
                    className={styles.stepCircle}
                    style={{ backgroundColor: "rgb(247, 191, 43)" }}
                  ></span>
                  <span>Contacted</span>
                </div>
                <div className={styles.stepValue}>
                  4<span className={styles.stepDelta}>+4</span>
                </div>
                <div className={styles.stepTip}></div>
              </div>
              <div className={styles.workflowItemStep}>
                {" "}
                <div className={styles.stepName}>
                  <span
                    className={styles.stepCircle}
                    style={{ backgroundColor: "rgb(52, 197, 70)" }}
                  ></span>
                  <span>Connected</span>
                </div>
                <div className={styles.stepValue}>
                  0<span className={styles.stepDelta}>+4</span>
                </div>
                <div className={styles.stepTip}></div>
              </div>
              <div className={styles.workflowItemStep}>
                {" "}
                <div className={styles.stepName}>
                  <span
                    className={styles.stepCircle}
                    style={{ backgroundColor: "rgb(89, 10, 255)" }}
                  ></span>
                  <span>Replied</span>
                </div>
                <div className={styles.stepValue}>
                  2<span className={styles.stepDelta}>+2</span>
                </div>
                <div className={styles.stepTip}></div>
              </div>
              <div className={styles.workflowItemStep}>
                {" "}
                <div className={styles.stepName}>
                  <span
                    className={styles.stepCircle}
                    style={{ backgroundColor: "rgb(0, 217, 217)" }}
                  ></span>
                  <span>Lead</span>
                </div>
                <div className={styles.stepValue}>
                  2<span className={styles.stepDelta}>+1</span>
                </div>
                <div className={styles.stepTip}></div>
              </div>
              <div className={styles.workflowItemStep}>
                {" "}
                <div className={styles.stepName}>
                  <span
                    className={styles.stepCircle}
                    style={{ backgroundColor: "rgb(0, 122, 255)" }}
                  ></span>
                  <span>Customer</span>
                </div>
                <div className={styles.stepValue}>
                  2<span className={styles.stepDelta}>+1</span>
                </div>
                <div className={styles.stepTip}></div>
              </div>
              <div className={styles.workflowItemStep}>
                {" "}
                <div className={styles.stepName}>
                  <span
                    className={styles.stepCircle}
                    style={{ backgroundColor: "rgb(255, 99, 89)" }}
                  ></span>
                  <span>Not Connected</span>
                </div>
                <div className={styles.stepValue}>
                  2<span className={styles.stepDelta}>+1</span>
                </div>
                <div className={styles.stepTip}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.row}`}></div>
      </div>
    </div>
  );
}
function CampainOfUser() {
  const router = useRouter();
  const id = router.query.id;
  const handleClickCreateNewCampaign = () => {
    router.push("add/" + id);
  };
  return (
    <div>
      <nav className={styles.campaignNav}>
        <div className={styles.navCampaign}>My Campaigns</div>
      </nav>
      <div className={styles.workflow}>
        <div className={styles.vldParent}>
          <div className={styles.pageHeader}>
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className={styles.pageHeaderSearch}
            />
            <div className={styles.pageHeaderButtons}>
              <div className={styles.pageHeaderButtonExpandAll}>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                <span className="ms-3">Expand All</span>
              </div>
              <div className={styles.pageHeaderButtonDuplicateToAnother}>
                <FontAwesomeIcon icon={faClone} />
                <span className="ms-3">Duplicate to another account</span>
              </div>
              <div className={styles.pageHeaderButtonCreateNewCampaign}>
                <FontAwesomeIcon icon={faPlus} />
                <span className="ms-3" onClick={handleClickCreateNewCampaign}>
                  Create New Campaign
                </span>
              </div>
            </div>
          </div>
          <div className={styles.myWorkflows}>
            <div className={styles.myWorkflowsTable}>
              <WorkflowRow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampainOfUser;
