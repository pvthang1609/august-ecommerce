import ToastMessage from "components/toastMessage";
import React from "react";
import { useSelector } from "react-redux";
import "./notification.scss";

export default function Notification() {
  const notification = useSelector((state) => state.notification);
  return (
    <div className="notification">
      {notification.map((item, index) => {
        return (
          <ToastMessage status={item.status} title={item.title} key={index} />
        );
      })}
    </div>
  );
}
