import { useState } from "react";
import LandingPage from "./components/LandingPage";
import TheWordApp from "./components/TheWordApp";

export default function App() {
  const [screen, setScreen] = useState("landing");
  return screen === "landing"
    ? <LandingPage onEnter={() => setScreen("app")} />
    : <TheWordApp onBack={() => setScreen("landing")} />;
}
