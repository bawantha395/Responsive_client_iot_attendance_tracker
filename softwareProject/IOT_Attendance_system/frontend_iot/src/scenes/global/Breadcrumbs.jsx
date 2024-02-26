// import * as React from "react";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import { useTheme, useMediaQuery } from "@mui/material";

// const breadcrumbNameMap = {
//   "/": "Main dashboard",
//   "/dashboard": "Main Dashboard",
//   "/mymodules": "Courses",
//   "/reports": "Courses / Modules / Reports",
//   "/registeredstudentslist": "Courses / Modules / Registered Students List",
//   "/lecturetimes": "Lecture Times",
//   "/modulelist": "Courses / Modules",
//   "/courselist": "Lecture Times / Courses",
//   "/moduleList2": "Lecture Times / Modules",
// };

// function LinkRouter(props) {
//   return <Link {...props} component={RouterLink} />;
// }

// export default function RouterBreadcrumbs({ isDrawerOpen }) {
//   const theme = useTheme();
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);
//   const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
//   const maxItems = isDrawerOpen ? (isXSmall ? 2 : 4) : 8; // Adjust maxItems based on drawer state

//   return (
//     <Breadcrumbs aria-label="breadcrumb" maxItems={maxItems} separator="›">
//       <LinkRouter underline="hover" color="inherit" to="/">
//         Navigation panel
//       </LinkRouter>
//       {pathnames.map((value, index) => {
//         const last = index === pathnames.length - 1;
//         const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const name = breadcrumbNameMap[to] || value;

//         // Split the name by '/' to render each part vertically
//         const nameParts = name.split(" / ");

//         return last ? (
//           <Typography color="text.primary" key={to}>
//             {nameParts.map((part, i) => (
//               <React.Fragment key={i}>
//                 {part}
//                 {i < nameParts.length - 1 && <br />} {/* Add line break except for the last part */}
//               </React.Fragment>
//             ))}
//           </Typography>
//         ) : (
//           <React.Fragment key={to}>
//             {nameParts.map((part, i) => (
//               <React.Fragment key={i}>
//                 <LinkRouter underline="hover" color="inherit" to={to} key={to + i}>
//                   {part}
//                 </LinkRouter>
//                 {i < nameParts.length - 1 && <br />} {/* Add line break except for the last part */}
//               </React.Fragment>
//             ))}
//           </React.Fragment>
//         );
//       })}
//     </Breadcrumbs>
//   );
// }

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Typography from "@mui/material/Typography";

// function DynamicBreadcrumbs() {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter((x) => x);

//   return (
//     <Breadcrumbs
//       separator="›"
//       aria-label="breadcrumb"
//       sx={{ flexDirection: "column" }}
//     >
//       <Link color="inherit" to="/"></Link>
//       {pathnames.map((name, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
//         const isLast = index === pathnames.length - 1;
//         return isLast ? (
//           <Typography color="textPrimary" key={routeTo}>
//             {name}
//           </Typography>
//         ) : (
//           <Link color="inherit" to={routeTo} key={routeTo}>
//             {name}
//           </Link>
//         );
//       })}
//     </Breadcrumbs>
//   );
// }

// export default DynamicBreadcrumbs;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

// Define the mapping of routes to breadcrumb names
const breadcrumbMap = {
  "/": "Main dashboard",
  "/mymodules": "Courses",
  "/reports": "Courses / Modules / Reports",
  "/registeredstudentslist": "Courses / Modules / Registered Students List",
  "/lecturetimes": "Lecture Times",
  "/modulelist": "Courses / Modules",
  "/courselist": "Lecture Times / Courses",
  "/moduleList2": "Lecture Times / Coures / Modules",
  "/dashboard": "Lecture Times / Coures / Modules / Main Dashboard",
};

function DynamicBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      separator="›"
      aria-label="breadcrumb"
      sx={{ flexDirection: "column" }}
    >
      <Link color="inherit" to="/"></Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const breadcrumbName = breadcrumbMap[routeTo] || name; // Get the breadcrumb name from the map or use the default name
        const parts = breadcrumbName.split(" / "); // Split the breadcrumb name by '/'
        return isLast ? (
          <Typography color="textPrimary" key={routeTo} variant="body2">
            {parts.map((part, idx) => (
              <span key={idx}>
                {part}
                {idx !== parts.length - 1 && <br />}{" "}
                {/* Add line break except for the last part */}
              </span>
            ))}
          </Typography>
        ) : (
          <Link color="inherit" to={routeTo} key={routeTo}>
            {parts.map((part, idx) => (
              <span key={idx}>
                {part}
                {idx !== parts.length - 1 && <br />}{" "}
                {/* Add line break except for the last part */}
              </span>
            ))}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

export default DynamicBreadcrumbs;
