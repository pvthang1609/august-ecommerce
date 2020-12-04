import React from "react";
import notFound from "assets/image/404.svg";

export default function NotFound() {
  return (
    <div style={{ height: "100vh" }}>
      <img style={{ maxHeight: "100%" }} src={notFound} alt="404" />
    </div>
  );
}
