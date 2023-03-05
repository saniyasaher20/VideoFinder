import React from 'react'
import { ConvertToK } from "../utils/helper";
import { MdCheckCircle } from "react-icons/md";

// I have destructured all props in VideoContainer.js, now here `videos` works just like `props`. then we do props.id <=> videos.id
const VideoCard = (video) => {
    // const videoData = VIDEOS_API_DATA.items
    // console.log(videos);

    return (
        <div key={video.id} className='w-80 mx-2 my-5 ' >
            <img className='rounded-xl' src={video?.snippet?.thumbnails?.medium?.url} alt="" />
            <div className="info mt-2 flex gap-2">
                {/* <div className='rounded-full w-8 h-8 bg-red-800'></div> */}
                <span>
                    <div className='font-semibold'>{video?.snippet?.title}</div>
                    <div className=' flex items-center gap-1 text-gray-600 text-sm mt-1'>{video?.snippet?.channelTitle} <MdCheckCircle /></div>
                    <div className='text-gray-600 text-sm'>{
                        ConvertToK(video?.statistics?.viewCount)} views</div>
                </span>
            </div>
        </div >
    )
}

export const AdVideoCard = (video) => {
    return (
        <div className="shadow-md shadow rounded-lg">
            <p className='px-3 pt-1'>HOC component</p>
             <VideoCard {...video} />
       </div>
    )
}

export default VideoCard