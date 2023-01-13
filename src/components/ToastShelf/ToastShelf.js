import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

import useKeyDown from "../../hooks/use-keyDown";

function ToastShelf() {
  const { toastData, handleClose, clearAllToasts } =
    React.useContext(ToastContext);

  const handleEscape = React.useCallback(() => {
    clearAllToasts();
  }, []);
  useKeyDown("Escape", handleEscape);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toastData.map(({ id, comment, variant }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
            handleClose={() => {
              handleClose(id);
            }}
          >
            {comment}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
