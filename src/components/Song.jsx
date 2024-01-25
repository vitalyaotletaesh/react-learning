export default function Song({author, name, duration}) {
  return (
    <div className={'box'}>
      <div className="song-info">
        <div className="author-name">
          {author}
        </div>
        <div className="song-name">
          {name}
        </div>
      </div>
      <div className="song-duration">
        {duration}
      </div>
    </div>
  )
}