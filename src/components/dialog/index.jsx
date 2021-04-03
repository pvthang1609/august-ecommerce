import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./dialog.scss";

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func,
};

function Dialog(props) {
  const { children, handleClose } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const func = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", func);
    return () => {
      removeEventListener("keydown", func);
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className={`dialog`}>
      <div className="dialog-inner">
        <div className="dialog-header">
          <button
            className="btn btn--close"
            type="button"
            onClick={handleClose}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="dialog-content">{children}</div>
      </div>
    </div>
  );
}

export default Dialog;
