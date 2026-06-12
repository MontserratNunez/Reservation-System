import Navbar from "@/components/Navbar";
import CreateReviewForm from "@/features/review/components/CreateReviewForm";

const CreateReviewPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <Navbar />
      <CreateReviewForm />
    </div>
  );
};

export default CreateReviewPage;