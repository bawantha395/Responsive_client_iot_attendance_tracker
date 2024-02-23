import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useLocation } from "react-router-dom";

const breadcrumbNameMap = {
  "/": "Main dashboard",
  "/dashboard": "Main Dashboard",
  "/mymodules": " Courses",
  "/reports": "Courses / Modules / Reports",
  "/registeredstudentslist": "Courses / Modules / Registered Students List",
  "/lecturetimes": "Lecture Times",
  "/modulelist": "Courses / Modules",
  "/courselist": "Lecture Times / Courses",
  "/moduleList2": "Lecture Times / Modules",
};

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

export default function RouterBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const name = breadcrumbNameMap[to];

        return last ? (
          <Typography color="text.primary" key={to}>
            {name}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {name}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
