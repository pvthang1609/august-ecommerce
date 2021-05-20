//react
import React from "react";
// import PropTypes from "prop-types";

//third-lib
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//components
import Whisper from "./Whisper";
import Tooltip from "./Tooltip";
import Toggle from "./Toggle";

//css & other
import {
  BellIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  LoginIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/solid";

function UserActions() {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.authentication);

  const handleDarkMode = (v) => {
    if (v) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex justify-end items-center space-x-3">
      <Whisper speaker={<Tooltip>Dark mode</Tooltip>}>
        <Toggle
          iconOff={<SunIcon className="w-4 h-4" />}
          iconOn={<MoonIcon className="w-4 h-4" />}
          handleChange={handleDarkMode}
        />
      </Whisper>
      <Whisper speaker={<Tooltip>Thông báo</Tooltip>}>
        <Link className="relative link-button">
          <BellIcon className="w-5 h-5" />
          <span className="absolute top-0 right-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
          </span>
        </Link>
      </Whisper>
      <Whisper speaker={<Tooltip>Giỏ hàng</Tooltip>}>
        <Link className="relative link-button">
          <ShoppingCartIcon className="w-5 h-5" />
          {cart.length !== 0 && (
            <span className="absolute -top-1 -right-1 flex justify-center items-center bg-red-400 w-4 h-4 rounded-full text-center text-xs text-white">
              <span>{cart.length > 9 ? "9+" : cart.length}</span>
            </span>
          )}
        </Link>
      </Whisper>
      {user ? (
        <Whisper speaker={<Tooltip>{user.name}</Tooltip>}>
          <Link className="overflow-hidden bg-gray-200 rounded-full hover:filter hover:brightness-95 transition duration-300 active:transform active:scale-95 w-8">
            {user.urlAvatar ? (
              <img src={user.urlAvatar} alt="" />
            ) : (
              <UserCircleIcon className="w-5 h-5" />
            )}
          </Link>
        </Whisper>
      ) : (
        <Whisper speaker={<Tooltip>Đăng nhập</Tooltip>}>
          <Link to="/auth/login" className="link-button">
            <LoginIcon className="w-5 h-5" />
          </Link>
        </Whisper>
      )}
    </div>
  );
}

UserActions.propTypes = {};

export default UserActions;
