import React from "react";

import Button from "../Button";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { updateToasts } = React.useContext(ToastContext);
  const [comment, setComment] = React.useState("");
  const [variantValue, setVariantValue] = React.useState(VARIANT_OPTIONS[0]);

  const updateToastData = () => {
    updateToasts(comment, variantValue);
    setComment("");
    setVariantValue(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label htmlFor={`${option}`} key={`${option}`}>
                <input
                  id={`${option}`}
                  type="radio"
                  name={"variant-options"}
                  checked={variantValue == `${option}`}
                  value={`${option}`}
                  onChange={(event) => {
                    setVariantValue(event.target.value);
                  }}
                />
                {option}
              </label>
            ))}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={updateToastData}>Pop Toast!</Button>
          </div>
        </div>
      </div>

      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;
