import ToastMessage from "components/toastMessage";
import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./notification.scss";

export default function Notification() {
  const notification = useSelector((state) => state.notification);
  return (
    <div className="notification">
      <TransitionGroup>
        {notification.map((item, index) => {
          return (
            <CSSTransition
              key={index}
              timeout={300}
              classNames="notification-item"
            >
              <ToastMessage status={item.status} title={item.title} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
