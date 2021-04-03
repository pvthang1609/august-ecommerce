import React from "react";
import PropTypes from "prop-types";
import "./image-field.scss";

ImageField.propTypes = {
  label: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  form: PropTypes.object,
  field: PropTypes.object,
};

function ImageField(props) {
  const { label, handleClose, form, field } = props;
  const { value } = field;
  console.log({ form, field });
  return (
    <div className="image-field">
      <div className="image-field__icon">
        <i className="fa fa-file-image-o" aria-hidden="true"></i>
      </div>
      <div className="image-field__content">
        <div className="content-header">
          <div className="label">{label}</div>
          <div className="error-message">error message here!!</div>
        </div>
        <div className="content-main">
          <div className="image-review">
            {value &&
              value.map((item, index) => {
                return (
                  <div className="image" key={index}>
                    <img src={item} alt="" />
                    <button type="button" className="btn btn--close">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                );
              })}
            <div
              className="add"
              style={
                value.length !== 0
                  ? { background: "transparent", width: "3.5rem" }
                  : null
              }
            >
              <button
                className="btn btn--add"
                type="button"
                onClick={handleClose}
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="status-icon">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageField;
