import { useState, useEffect } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import Modal from './components/Modal';

function App() {
  const [songs, setSongs] = useState([]);
  const [order, setOrder] = useState("short-first");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect( () => {
    const getSongs = async () => {
      const songsFromServer = await fetchSongs();
      setSongs(songsFromServer);
    }

    getSongs()
  }, [])

  //Fetch songs
  const fetchSongs = async () => {
    const res = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart');
    const data = await res.json();
    const songs = [];

    data.tracks.data.forEach(song => songs.push({
      id: song.id,
      title: song.title,
      artist: song.artist.name,
      position: song.position,
      duration: song.duration
    }))

    return songs;
  }

  function orderSongs() {
    if (order === "short-first") {
      return songs.sort((a, b) => a.duration - b.duration);
    } else {
      return songs.sort((a, b) => b.duration - a.duration);
    }
  }

  function openModal(data) {
    setShowModal(true);
    setModalData(data);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      <Header order={order} setOrder={setOrder}/>
      {orderSongs().map((song) => (
        <Song key={song.id} song={song} onClick={() => {
          openModal(song);
        }}/>
      ))}
      {showModal && <Modal data={modalData} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
