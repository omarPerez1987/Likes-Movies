import "./App.css";
import React, { useEffect, useState } from "react";
import CardVideo from "./components/CardVideo/CardVideo";
import ListLike from "./components/ListLike/ListLike";

function App() {
  const [stateNumber, setStateNumber] = useState(0);
  const [videoApi, setVideoApi] = useState();
  const [titleApi, setTitleApi] = useState();

  const resPorPagina = 10;
  const key = process.env.REACT_APP_API_KEY1;
  const idCanal = process.env.REACT_APP_ID_CANAL;

  const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${idCanal}&part=snippet,id&order=date&maxResults=${resPorPagina}`;

  useEffect(() => {
    const FetchApi = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setVideoApi(data.items[stateNumber].id.videoId);
      setTitleApi(data.items[stateNumber].snippet.title);
    };
    FetchApi();
  }, [stateNumber]);



  const disminuir = () => {
    setStateNumber(stateNumber <= 0 ? 9 : stateNumber - 1);
  };

  const aumentar = () => {
    setStateNumber(stateNumber >= 9 ? 0 : stateNumber + 1);
  };

  return (
    <>
      <section className="section-general">
        <ListLike 
        titleApi={titleApi}
        />
        <CardVideo
          videoApi={videoApi}
          titleApi={titleApi}
          disminuir={disminuir}
          aumentar={aumentar}
        />
      </section>
    </>
  );
}

export default App;
