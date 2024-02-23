// import React from "react";

// export default function ModuleDetails() {
//   const moduleCode = "EE5403";
//   const moduleName = "Software Project";
//   const lectureDate = " 15/01/2024";
//   const lectureTime = "0830 - 1030";

//   return (
//     <div>
//       <h3>Module Details</h3>
//       <p>
//         <strong>Module Code:</strong> {moduleCode}
//       </p>
//       <p>
//         <strong>Module Name:</strong> {moduleName}
//       </p>
//       <p>
//         <strong>Date:</strong> {lectureDate}
//       </p>
//       <p>
//         <strong>Time:</strong> {lectureTime}
//       </p>
//     </div>
//   );
// }

import React from "react";

export default function ModuleDetails() {
  const moduleCode = "EE5403";
  const moduleName = "Software Project";
  const lectureDate = " 15/01/2024";
  const lectureTime = "0830 - 1030";

  return (
    <div>
      <h3>Module Details</h3>
      <p>
        <strong>Module Code:</strong> {moduleCode}
      </p>
      <p>
        <strong>Module Name:</strong> {moduleName}
      </p>
      <p>
        <strong>Date:</strong> {lectureDate}
      </p>
      <p>
        <strong>Time:</strong> {lectureTime}
      </p>
    </div>
  );
}
