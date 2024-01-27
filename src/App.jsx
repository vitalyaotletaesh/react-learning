import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import Playlist from "./components/Playlist.jsx";
import TypeProgramSection from "./components/TypeProgramSection.jsx";
import CurrentSongSection from "./components/CurrentSongSection.jsx";
import TabsSection from "./components/TabsSection.jsx";
import Profile from "./components/Profile.jsx";
import FeedbackSection from "./components/FeedbackSection.jsx";
import EffectSection from "./components/EffectSection.jsx";

function App() {
  const [tab, setTab] = useState('effect')

  return (
    <>
      <Header/>
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <Playlist/>
            <CurrentSongSection/>
            <TypeProgramSection/>
          </>
        )}

        {tab === 'profile' && (
          <>
            <Profile/>
          </>
        )}

        {tab === 'feedback' && <FeedbackSection/>}

        {tab === 'effect' && <EffectSection/>}
      </main>
    </>
  )
}

export default App
