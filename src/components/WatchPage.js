import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import CommentsContainer from "./CommentsContainer";
import { VIDEOS_API_DATA } from '../utils/apiData';
import { ConvertToK } from "../utils/helper";
import { MdThumbUpOffAlt, MdOutlineShare, MdOutlineFileDownload, MdVisibility } from "react-icons/md";

const VideoInfoBtn = (props) => {
  return <button
    className='flex items-center gap-2 bg-gray-100 rounded-full px-6 py-2 font-semibold text-sm hover:bg-gray-200 transition-colors'>
    {props.icon}
    {props.text}
  </button>

}

const WatchPage = () => {
  const data = useLocation();
  const { snippet, statistics } = data.state;

  const [searchParams] = useSearchParams();

  return (
    <div className='w-[1100px]'>
      {/* Video Iframe */}
      <div>
        <iframe className='h-[600px]' width={1100} src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

      {/* Video Info */}
      <h1 className='text-xl font-extrabold mt-3'>{snippet?.title}</h1>
      <div className='mt-2 flex items-center justify-between'>
        <span className='flex gap-3'>
          {/* <div className='rounded-full w-10 h-10 bg-red-700'></div> */}
          <span className='flex flex-col'>
            <span className="font-extrabold text-sm">{snippet?.channelTitle}</span>
            <span className='text-sm'>{ConvertToK(220000)} subscribers</span>
          </span>
        </span>

        <span className='flex gap-3'>
          <VideoInfoBtn {...data.state} icon={<MdThumbUpOffAlt className='text-xl' />} text={ConvertToK(statistics?.likeCount)} />
          <VideoInfoBtn {...data.state} icon={<MdVisibility className='text-xl' />}  text={ConvertToK(statistics?.viewCount)} />
          <VideoInfoBtn {...data.state} icon={<MdOutlineShare className='text-xl' />} text="Share" />
          <VideoInfoBtn {...data.state} icon={<MdOutlineFileDownload className='text-xl' />} text="Download" />
        </span>
      </div>
      <CommentsContainer />
    </div>
  )
}

export default WatchPage