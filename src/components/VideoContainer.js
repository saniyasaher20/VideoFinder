import { useEffect, useState } from 'react';
import { VIDEOS_API, VIDEO_CATEGORIES_API, CHANNELS_API } from "../constants";
import {VIDEOS_API_DATA} from "../utils/apiData";
import VideoCard from './VideoCard';
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
            {
                videos.map((video) => {
                    return (
                        <Link key={video.id} to={'/watch?v=' + video.id}>
                            <VideoCard {...video} />
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default VideoContainer; 