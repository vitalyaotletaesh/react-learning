import {useEffect, useState} from 'react'
import './App.css'
import Header from './components/Header';
import Song from "./components/Song";
import Button from "./components/Button/Button.jsx";
import {songs} from "./Data";

function App() {
  const [songIndex, setSongIndex] = useState(0)
  const [contentType, setContentType] = useState('work')

  const handleClickChangeSong = (value) => {
    setSongIndex(songIndex + value)
  }

  const handleClickChangeContentType = (type) => {
    setContentType(type)
  }

  return (
    <>
      <Header/>
      <main>
        <section>
          <h2>Ваш плейлист:</h2>
          {songs.map(song => (
            <Song key={song.id} {...song}/>
          ))}
        </section>
        <section className={'currentSong'}>
          {!(songIndex >= 0 && songIndex < songs.length) &&
            <div>{'Некорректный индекс: ' + songIndex}</div>}
          {songIndex >= 0 && songIndex < songs.length &&
            <section>Текущая песня: {songIndex + '. ' + songs[songIndex].name}</section>
          }
        </section>
        <section className={'changeSongSection'}>
          <Button onClick={() => handleClickChangeSong(-1)}> &#8656; </Button>
          <Button onClick={() => handleClickChangeSong(1)}> &#8658; </Button>
        </section>


        <section className={'typeProgramSection'}>
          <Button isActive={contentType === 'work'}
                  onClick={() => handleClickChangeContentType('work')}>Work</Button>
          <Button isActive={contentType === 'learning'}
                  onClick={() => handleClickChangeContentType('learning')}>Learning</Button>
          <Button isActive={contentType === 'games'}
                  onClick={() => handleClickChangeContentType('games')}>Games</Button>
        </section>

        {!contentType && <div>{'No content'}</div>}
        {contentType && <section>{contentType}</section>}
      </main>
    </>
  )
}

export default App
