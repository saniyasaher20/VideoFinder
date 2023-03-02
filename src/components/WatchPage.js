import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  const [searchParams] = useSearchParams()

  return (
    <div>
      <iframe className='h-[600px]' width={1100} src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage