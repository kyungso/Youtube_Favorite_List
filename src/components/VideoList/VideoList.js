import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './VideoList.scss';
import Video from 'components/Video';

const VideoList = ({ location: { pathname } }) => {
  const [videos, setVideos] = useState(null);
  let pathName = pathname.split('/')[2]
  const list = JSON.parse(localStorage.getItem("list"));

  useEffect(()=>{
    list.map((a,index)=> {
      if(a.listName === pathName) {
        setVideos(list[index]);
      }
      return null;
    });
  },[]);

  return (
    <>
    {videos &&
      <div className="videoList__container">
        <h2 className="videoListName">{videos.listName} 비디오 목록</h2>
        {videos.video.length > 0 
        ? <div className="Listsection__container">
            {videos.video.map(video => (
              <Video key={video.video_id} video={video} />
            ))}
          </div>
        : '없음'
        }
      </div>
    }
    </>
  );
};

export default withRouter(VideoList);