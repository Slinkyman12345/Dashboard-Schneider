
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginScreen from "@/components/LoginScreen";
import LoadingScreen from "@/components/LoadingScreen";
import AlertScreen from "@/components/AlertScreen";
import useSound from "@/hooks/useSound";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const { playSound } = useSound();

  useEffect(() => {
    // Reset login state when component mounts
    setIsLoggedIn(false);
    setIsLoading(false);
    setLoginAttempts(0);
    setShowAlert(false);
  }, []);

  const handleLogin = (username: string, password: string): boolean => {
    if (username === "supervisor.ahc.site04@scip.net" && password === "z2ZmuYX8JWBkvzvB3LdG") {
      playSound("access-granted");
      setIsLoggedIn(true);
      setIsLoading(true);
      return true;
    } else {
      playSound("access-denied");
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      if (newAttempts >= 3) {
        playSound("alert");
        setShowAlert(true);
      }
      return false;
    }
  };

  const handleLoadingComplete = () => {
    // Navigate directly to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-military-dark overflow-hidden relative">
      <div className="noise"></div>
      
      {showAlert ? (
        <AlertScreen />
      ) : isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          {!isLoggedIn && (
            <LoginScreen onLogin={handleLogin} attempts={loginAttempts} />
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
