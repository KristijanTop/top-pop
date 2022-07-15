const Song = ({ song, onClick }) => {
  return (
    <div className="song" onClick={onClick}>
        <h3>{song.artist} - {song.title}</h3>
    </div>
  )
}

export default Song