import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import OpeningScreen from "./components/OpeningScreen";
import SecondScreen from "./components/SecondScreen";
import LocationScreen from "./components/LocationScreen";
import "./App.css";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#FCEEF1]">
      <AnimatePresence mode="wait">
        {currentScreen === 0 && (
          <motion.div
            key="opening"
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <OpeningScreen
              onNext={() => setCurrentScreen(1)}
            />
          </motion.div>
        )}

        {currentScreen === 1 && (
          <motion.div
            key="second"
            className="absolute inset-0"
            initial={{ opacity: 0, x: 60, scale: 1.03 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <SecondScreen
              onBack={() => setCurrentScreen(0)}
              onLocation={() => setCurrentScreen(2)}
            />
          </motion.div>
        )}

        {currentScreen === 2 && (
          <motion.div
            key="location"
            className="absolute inset-0"
            initial={{ opacity: 0, x: 60, scale: 1.03 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <LocationScreen
              onBack={() => setCurrentScreen(0)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <BackgroundMusic />
    </div>
  );
}

export default App;
