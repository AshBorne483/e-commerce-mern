import React, { useState, useEffect } from "react";
import LoadingScreen from "./components/loadingScreen.jsx";
import LandingPage from "./pages/landingPage.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Your actual app initialization logic here
    const initializeApp = async () => {
      try {
        // Example: API calls, auth checks, etc.
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsLoading(false);
      } catch (error) {
        console.error("App initialization failed:", error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return (
      <LoadingScreen
        isLoading={isLoading}
        message="Loading App"
        subMessage="Please wait for a moment."
      />
    );
  }

  return (
    <div className="App">
      {/* Your main app content */}
      <LandingPage />
    </div>
  );
};

export default App;
