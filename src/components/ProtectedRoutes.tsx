import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContenxt";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) return <p>Loading...</p>;

  return <>{children}</>;
};

export default ProtectedRoute;
