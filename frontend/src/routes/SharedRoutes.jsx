import { Routes, Route } from "react-router-dom";
import NotificationPage from "@/pages/shared/NotificationPage";
import CreatePropertyPage from "@/pages/shared/CreatePropertyPage";
import PropertyDetailPage from "@/pages/shared/PropertyDetailPage";
import NotFound from "@/pages/NotFound";

const SharedRoutes = () => {
  return (
    <Routes>
        <Route path="properties/:id" element={<PropertyDetailPage />} />
        <Route path="properties/create" element={<CreatePropertyPage />} />
        <Route path="notifications" element={<NotificationPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SharedRoutes;
