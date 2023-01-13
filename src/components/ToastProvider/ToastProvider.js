import React from "react";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [toastData, setToastData] = React.useState([
    {
      id: "randomId",
      variant: VARIANT_OPTIONS[0],
      comment: "This is a new Toast",
    },
  ]);

  const handleClose = (id) => {
    setToastData(
      toastData.filter((toast) => {
        return toast.id != id;
      })
    );
  };

  const updateToasts = (comment, variant) => {
    const nextToasts = [
      ...toastData,
      { id: crypto.randomUUID(), comment, variant },
    ];
    setToastData(nextToasts);
  };

  const clearAllToasts = () => {
    setToastData([]);
  };

  const values = { toastData, handleClose, updateToasts, clearAllToasts };

  return (
    <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
