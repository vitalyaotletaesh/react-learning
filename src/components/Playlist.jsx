import {songs} from "../Data.js";
import Song from "./Song.jsx";

export default function Playlist() {
  return (
    <section>
      <h2>Ваш плейлист:</h2>
      {songs.map(song => (
        <Song key={song.id} {...song}/>
      ))}
    </section>
  )
}