// src/App.jsx

// App.jsx
import { useEffect, useRef } from "react";
import AppRoutes from "@/routes/AppRoutes";
import { AuthProvider } from "@/context/AuthContext";
import { setupInterceptors } from "@/services/interceptors";

const AppContent = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      setupInterceptors();
      initialized.current = true;
    }
  }, []);

  return <AppRoutes />;
};

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

/*import { useEffect } from "react";
import AppRoutes from "@/routes/AppRoutes";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { setupInterceptors } from "@/services/interceptors";

const AppContent = () => {
  const auth = useAuth();

  useEffect(() => {
    setupInterceptors(auth);
  }, [auth]);

  return <AppRoutes />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;*/