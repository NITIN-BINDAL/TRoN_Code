import React from "react";
import styles from "./Label.module.css";
import { Tooltip } from "antd";

import { FaInfoCircle } from "react-icons/fa";

/**
 *
 * @param {Boolean} isRequired If the input is required
 * @param {String} label The label of the input
 * @param {String} helpText The help text of the input
 * @param {String} sideText Any extra text
 * @returns
 */
const InputLabel = ({ isRequired = true, label, helpText, sideText="" }) => {
  return (
    <div className={styles.label_container}>
      <div className={styles.labelCtnr}>
        <span>
          {isRequired && <span>*</span>}

          <p>{label}</p>
          <Tooltip title={helpText}>
            <FaInfoCircle className={styles.info_icon} />
          </Tooltip>
        </span>
        <p className={styles.sideText}>
          {sideText}
        </p>
      </div>
    </div>
  );
};

export default InputLabel;
