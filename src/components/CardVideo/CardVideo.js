import "./CardVideo.css";

function CardVideo({ titleApi, videoApi, disminuir, aumentar}) {

  return (
    <section>
      <div className="aside">
        <div className="container_card">
          <div className="video">
            <iframe
              className="reproductor"
              src={`https://www.youtube.com/embed/${videoApi}?modestbranding=1&rel=0&showinfo=0&autoplay=1`}
              title={titleApi}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture"
            ></iframe>
          </div>

          <div className="position-footer">
            <button onClick={disminuir} className="reverse">◀</button>
            <button onClick={aumentar} className="forward">▶</button>
          </div>
          <div className="containerTitle">
            <h4 className="title">🎬... {titleApi}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardVideo;
