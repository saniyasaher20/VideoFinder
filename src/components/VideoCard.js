import React from 'react'
import { ConvertToK } from "../utils/helper";
import { MdCheckCircle } from "react-icons/md";

const VideoCard = (videos) => {
    // const videoData = VIDEOS_API_DATA.items
    // console.log(videos);

    return (
        <div key={videos.id} className='w-80 mx-2 my-5 ' >
            <img className='rounded-xl' src={videos?.snippet?.thumbnails?.medium?.url} alt="" />
            <div className="info mt-2 flex gap-2">
                {/* <div className='rounded-full w-8 h-8 bg-red-800'></div> */}
                <span>
                    <div className='font-semibold'>{videos?.snippet?.title}</div>
                    <div className=' flex items-center gap-1 text-gray-600 text-sm mt-1'>{videos?.snippet?.channelTitle} <MdCheckCircle /></div>
                    <div className='text-gray-600 text-sm'>{
                        ConvertToK(videos?.statistics?.viewCount)} views</div>
                </span>
            </div>
        </div >
    )
}

export default VideoCard