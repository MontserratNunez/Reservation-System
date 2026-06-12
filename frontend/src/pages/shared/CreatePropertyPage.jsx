import Navbar from "@/components/Navbar";
import CreatePropertyForm from "@/features/property/components/CreatePropertyForm";

const CreatePropertyPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <Navbar />
      <CreatePropertyForm />
    </div>
  );
};

export default CreatePropertyPage;