import x from "../x.svg";

const Modal = ({ data, closeModal }) => {
  function calculateTime() {
    let minutes = Math.floor(data.duration / 60);
    let seconds = data.duration - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <button className="closeBtn" onClick={closeModal}>
          <img src={x} alt="x" />
        </button>
        <h1 className="position">{data.position}</h1>
        <h3>
          {data.artist} - {data.title} ({calculateTime()})
        </h3>
      </div>
    </div>
  );
};

export default Modal;
