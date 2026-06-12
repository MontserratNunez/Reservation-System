import { Routes, Route } from "react-router-dom";
import HostPropertiesPage from "@/pages/host/HostPropertiesPage";
import EditPropertyPage from "@/pages/host/EditPropertyPage";
import HostReservationsPage from "@/pages/host/HostReservationsPage";
import LocksPage from "@/pages/host/LocksPage";
import AddLockDatePage from "@/pages/host/AddLockDatePage";
import NotFound from "@/pages/NotFound";

const HostRoutes = () => {
  return (
    <Routes>
        <Route index element={<HostPropertiesPage />} />
        <Route path="properties/:id/edit" element={<EditPropertyPage />} /> 
        <Route path="properties/:id/reservations" element={<HostReservationsPage />}/>     
        <Route path="properties/:id/locks" element={<LocksPage />} />
        <Route path="properties/:id/locks/add-lock" element={<AddLockDatePage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default HostRoutes;