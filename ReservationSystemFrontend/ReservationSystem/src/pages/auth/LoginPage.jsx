import LoginForm from "@/features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <LoginForm />

      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default LoginPage;