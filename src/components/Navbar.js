import React from "react";
// import PropTypes from "prop-types";

import { NavLink, useRouteMatch } from "react-router-dom";

import Whisper from "components/Whisper";
import Tooltip from "components/Tooltip";

import {
  HomeIcon as HomeIconSolid,
  FilterIcon as FilterIconSolid,
  LocationMarkerIcon as LocationMarkerIconSolid,
  InformationCircleIcon as InformationCircleIconSolid,
} from "@heroicons/react/solid";
import {
  HomeIcon,
  InformationCircleIcon,
  LocationMarkerIcon,
  FilterIcon,
} from "@heroicons/react/outline";

Navbar.propTypes = {};

function Navbar() {
  return (
    <nav className="h-full">
      <ul className="flex justify-center items-center space-x-2 mt-px">
        <Whisper speaker={<Tooltip>Trang chủ</Tooltip>}>
          <CheckRouterMatch to="/product" exact={true}>
            {(match, to, exact) => (
              <li>
                <NavLink
                  to={to}
                  exact={exact}
                  activeClassName="text-red-500"
                  className={`px-6 py-2 rounded-lg ${
                    !match && "hover:bg-gray-200  dark:hover:bg-gray-800"
                  }`}
                  s
                >
                  {match ? (
                    <HomeIconSolid className="h-7 w-7 text-red-500 dark:text-blue-400" />
                  ) : (
                    <HomeIcon className="h-7 w-7" />
                  )}
                </NavLink>
              </li>
            )}
          </CheckRouterMatch>
        </Whisper>
        <Whisper speaker={<Tooltip>Phân loại</Tooltip>}>
          <CheckRouterMatch to="/product/filter-page" exact={false}>
            {(match, to, exact) => (
              <li>
                <NavLink
                  to={to}
                  exact={exact}
                  activeClassName="text-red-500"
                  className={`px-6 py-2 rounded-lg ${
                    !match && "hover:bg-gray-200  dark:hover:bg-gray-800"
                  }`}
                >
                  {match ? (
                    <FilterIconSolid className="h-7 w-7 text-red-500  dark:text-blue-400" />
                  ) : (
                    <FilterIcon className="h-7 w-7" />
                  )}
                </NavLink>
              </li>
            )}
          </CheckRouterMatch>
        </Whisper>
        <Whisper speaker={<Tooltip>Thông tin</Tooltip>}>
          <CheckRouterMatch to="/about" exact={false}>
            {(match, to, exact) => (
              <li>
                <NavLink
                  to={to}
                  exact={exact}
                  activeClassName="text-red-500"
                  className={`px-6 py-2 rounded-lg ${
                    !match && "hover:bg-gray-200  dark:hover:bg-gray-800"
                  }`}
                >
                  {match ? (
                    <InformationCircleIconSolid className="h-7 w-7 text-red-500  dark:text-blue-400" />
                  ) : (
                    <InformationCircleIcon className="h-7 w-7" />
                  )}
                </NavLink>
              </li>
            )}
          </CheckRouterMatch>
        </Whisper>
        <Whisper speaker={<Tooltip>Vị trí</Tooltip>}>
          <CheckRouterMatch to="/location" exact={false}>
            {(match, to, exact) => (
              <li>
                <NavLink
                  to={to}
                  exact={exact}
                  activeClassName="text-red-500"
                  className={`px-6 py-2 rounded-lg ${
                    !match && "hover:bg-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {match ? (
                    <LocationMarkerIconSolid className="h-7 w-7 text-red-500  dark:text-blue-400" />
                  ) : (
                    <LocationMarkerIcon className="h-7 w-7" />
                  )}
                </NavLink>
              </li>
            )}
          </CheckRouterMatch>
        </Whisper>
      </ul>
    </nav>
  );
}

const CheckRouterMatch = ({ to, exact, children }) => {
  const match = useRouteMatch({
    path: to,
    exact: exact,
  });
  return children(match, to, exact);
};

export default Navbar;
