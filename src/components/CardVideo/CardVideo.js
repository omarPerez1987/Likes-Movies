
import React, {useEffect, useState} from 'react';
import ListLike from '../ListLike/ListLike';
import './CardVideo.css'


function CardVideo () {
    
    const [stateNumber, setStateNumber] = useState(0)
    
    const [videoApi, setVideoApi] = useState()
    const [titleApi, setTitleApi] = useState()
    const [clic, setClic] = useState(false)

    
    
    const resPorPagina = 10;
    const key = process.env.REACT_APP_API_KEY2;
    const idCanal = process.env.REACT_APP_ID_CANAL;
    
    
    const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${idCanal}&part=snippet,id&order=date&maxResults=${resPorPagina}`
    
    
    const disminuir = () => {
        setStateNumber(stateNumber <= 0 ? 9 : stateNumber -1)
    }

    const aumentar = () => {
        setStateNumber(stateNumber >= 9 ? 0 : stateNumber +1)
    }

    function eventoClick() {
        setClic(titleApi);
      }
    
    
    useEffect(() => {
        const FetchApi = async () => {
            const response = await fetch(url);
            const data = await response.json();

            setStateNumber(stateNumber)
            
            setVideoApi(data.items[stateNumber].id.videoId)
            setTitleApi(data.items[stateNumber].snippet.title)
                    
            };
                FetchApi();
            }, [stateNumber]);
            
    return (
        <div>

            <div className='aside'>
                <div className="container_card">
                    <div className="video">

                        <iframe className='reproductor' src={`https://www.youtube.com/embed/${videoApi}?modestbranding=1&rel=0&showinfo=0&autoplay=1`}
                        title={titleApi} allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture"
                        ></iframe> 
                        
                    </div>

                    <div className='position-footer'>
                        <button onClick={disminuir} className="reverse">◀</button>
                        <button onClick={aumentar} className="forward">▶</button>
                        <button onClick={eventoClick} className="like">❤</button>
                    </div>
                    <div className='containerTitle'>
                        <h4 className="title" key={titleApi} >🎬... {titleApi}</h4>
                    </div>

                </div>
            </div>
                    <div>
                        <ListLike titulo={titleApi} clic={clic} />
                    </div>
        </div>
    )

}

export default CardVideo