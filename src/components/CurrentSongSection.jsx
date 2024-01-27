import {songs} from "../Data.js";
import Button from "./Button/Button.jsx";
import {useState} from "react";

export default function CurrentSongSection() {
  const [songIndex, setSongIndex] = useState(0)

  const handleClickChangeSong = (value) => {
    setSongIndex(songIndex + value)
  }

  return (
    <>
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
    </>
  )
}