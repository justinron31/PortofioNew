import { useDelayedToggle } from "./hooks/useDelayedToggle";
import Loader from "./components/Loader";
import InfoCard from "./components/InfoCard";

import "./App.css";

function App() {
  const showLoader = useDelayedToggle(true, 1700);
  const showInfoCard = !showLoader;

  return (
    <>
      {showLoader && <Loader />}
      {showInfoCard && <InfoCard />}
    </>
  );
}

export default App;
