import React, { useState } from 'react';
import LuxuryLanding from './pages/LuxuryLanding';
import VideoIntro from './components/VideoIntro';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';

function App() {
  const [started, setStarted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && !started && (
        <VideoIntro onStart={() => setStarted(true)} />
      )}
      {loaded && started && <LuxuryLanding />}
    </>
  );
}

export default App;
