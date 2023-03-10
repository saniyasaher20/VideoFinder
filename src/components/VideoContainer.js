import { useEffect, useState } from 'react';
import { VIDEOS_API, VIDEO_CATEGORIES_API, CHANNELS_API } from "../constants";
import { VIDEOS_API_DATA } from "../utils/apiData";
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    // Get Live API data
    // async function getVideos() {
    //     const response = await fetch(VIDEOS_API);
    //     const json = await response.json()
    //     setVideos(json?.items)
    //     console.log(json)
    // }


    // Get mocked data
    async function getVideos() {
        setVideos(VIDEOS_API_DATA.items)
    }

    useEffect(() => {
        getVideos()
    }, [])

    if (videos == []) return null;
    return (
        <div className='flex flex-wrap justify-evenly'>
            {videos[4] && <Link key="adVideCardId" to={'/watch?v=' + videos[4].id} state={{...videos[4]}}> <AdVideoCard {...videos[4]} /> </Link>}
            {
                videos.map((video) => {
                    return (
                        <>
                            {/* HOC - higher order component - Advertisement card */}

                            <Link key={video.id} to={'/watch?v=' + video.id} state={{...video}}>
                                <VideoCard {...video} />
                            </Link>
                        </>
                    )
                })
            }
        </div>
    )
}
export default VideoContainer; 