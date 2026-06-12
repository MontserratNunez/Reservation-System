import { Routes, Route } from "react-router-dom";
import GuestHomePage from "@/pages/guest/GuestHomePage";
import ReservationPage from "@/pages/guest/ReservationPage";
import GuestReservationsPage from "@/pages/guest/GuestReservationsPage";
import CreateReviewPage from "@/pages/guest/CreateReviewPage";
import NotFound from "@/pages/NotFound";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route index element={<GuestHomePage />} />
      <Route path="reserve/:propertyId" element={<ReservationPage />}/>
      <Route path="reservations" element={<GuestReservationsPage />}/>    
      <Route path="review/:reservationId" element={<CreateReviewPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default GuestRoutes;