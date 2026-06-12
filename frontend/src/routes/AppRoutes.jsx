import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import EmailConfirmationPage from "@/pages/auth/EmailConfirmationPage";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoutes from "./GuestRoutes";
import HostRoutes from "./HostRoutes";
import SharedRoutes from "./SharedRoutes";
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/email-confirmation" element={<EmailConfirmationPage />} />

        {/* guest and host */}
        <Route element={<ProtectedRoute roles={["guest", "host"]} />}>
          <Route path="/" element={<Navigate to="/guest" />} />
          <Route path="/*" element={<SharedRoutes />} />
        </Route>

        {/* Guest */}
        <Route element={<ProtectedRoute roles={["guest", "host"]} />}>
          <Route path="/guest/*" element={<GuestRoutes />} />
        </Route>

        {/* Host */}
        <Route element={<ProtectedRoute roles={["host"]} />}>
          <Route path="/host/*" element={<HostRoutes />} />
        </Route>

        {/* Not found */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;