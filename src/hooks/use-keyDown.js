import React from "react";

function useKeyDown(key, callback) {
  React.useEffect(() => {
    function onEscape(e) {
      if (e.code == key) {
        callback(e);
      }
    }

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, [callback]);
}

export default useKeyDown;
