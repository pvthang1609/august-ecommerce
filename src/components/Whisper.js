import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";

function Whisper({
  children,
  trigger = "hover",
  placement = "bottom",
  speaker,
  space = 10,
}) {
  const [isShowSpeaker, setIsShowSpeaker] = useState(false);
  const [heightChild, setHeightChild] = useState();
  const [widthChild, setWidthChild] = useState();

  const parentRef = useRef(null);
  const childRef = useRef(null);
  const parentHeightRef = useRef();
  const parentWidthRef = useRef();

  useEffect(() => {
    parentHeightRef.current = parentRef.current?.offsetHeight;
    parentWidthRef.current = parentRef.current?.offsetWidth;

    setHeightChild(childRef.current?.offsetHeight ?? 0);
    setWidthChild(childRef.current?.offsetWidth ?? 0);
  }, [isShowSpeaker]);

  const getStyle = (heightChild, heightParent, widthChild, widthParent) => {
    return {
      position: "absolute",
      zIndex: 10,
      transform: "translate( -50%, -50%)",
      whiteSpace: "nowrap",
      top:
        placement === "top"
          ? -(space + heightChild / 2)
          : placement === "bottom"
          ? space + heightParent + heightChild / 2
          : placement === "left"
          ? "50%"
          : "50%",
      left:
        placement === "top"
          ? "50%"
          : placement === "bottom"
          ? "50%"
          : placement === "left"
          ? -(space + widthChild / 2)
          : space + widthParent + widthChild / 2,
    };
  };

  const value = useMemo(
    () =>
      getStyle(
        heightChild,
        parentHeightRef.current,
        widthChild,
        parentWidthRef.current
      ),
    [heightChild, parentHeightRef.current, widthChild, parentWidthRef.current]
  );

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsShowSpeaker(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsShowSpeaker(false);
    }
  };

  const handleParentClick = () => {
    if (trigger === "click") {
      setIsShowSpeaker(() => !isShowSpeaker);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleParentClick}
      style={{ position: "relative" }}
      ref={parentRef}
    >
      {children}

      {isShowSpeaker && (
        <div style={value} ref={childRef}>
          {speaker}
        </div>
      )}
    </div>
  );
}

export default Whisper;

Whisper.propTypes = {
  children: PropTypes.node.isRequired,
  speaker: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  trigger: PropTypes.oneOf(["click", "hover"]),
  space: PropTypes.number,
};
