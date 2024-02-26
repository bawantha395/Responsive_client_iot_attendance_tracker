import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import MyModules from "./scenes/mymodules";
// import LectureTimes from "./scenes/lecturetimes";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import TopBar from "./scenes/global/Top_bar";

// import Calendar from "./scenes/calendar/calendar";
import { Divider } from "@mui/material";

// import MyModules from "./scenes/mymodules";
import LectureTimes from "./scenes/lecturetimes";
import ModuleList from "./scenes/mymodules/ModuleList";
import MiniDrawer from "./scenes/global/Drawer1";
import Reports from "./scenes/reports";
import RegisteredStudentsList from "./scenes/registedstudentslist";

import MyModules2 from "./scenes/lecturetimes/MyModules2";
import ModuleList2 from "./scenes/lecturetimes/ModuleList2";
import MyModules from "./scenes/mymodules";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <MiniDrawer />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Divider />

            <Routes>
              <Route path="/" element={<LectureTimes />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/courses" element={<MyModules />} />
              <Route path="/reports" element={<Reports />} />
              <Route
                path="/registeredstudentslist"
                element={<RegisteredStudentsList />}
              />

              <Route path="/lecturetimes" element={<LectureTimes />} />
              <Route path="/courselist" element={<MyModules2 />} />
              <Route path="/modulelist" element={<ModuleList />} />
              {/* <Route path="/eesem1a" element={<ModuleList2 />} /> */}
              <Route path="/moduleList2" element={<ModuleList2 />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
