import React, { useState, useEffect, useCallback } from 'react';

import './Home.scss';
import Video from 'components/Video';
import video_list from 'lib/data/list_dummy.json';

const Home = () => {
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(video_list.slice(0, 100));
  
  const _infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight === scrollHeight) {
      setItemIndex(itemIndex + 100);
      setResult(result.concat(video_list.slice(itemIndex+100, itemIndex+200)));
    } 
  }, [itemIndex, result]);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);
  
  return (
    <div className="home__container">
      <div className="section__container">
      {result.map(video => (
        <Video key={video.video_id} video={video} />
      ))}
      </div>
    </div>
  );
};

export default Home;