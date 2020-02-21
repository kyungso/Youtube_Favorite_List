import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './VideoList.scss';
import Video from 'components/Video';
import CheckMessage from 'components/CheckMessage';
import toast from 'toasted-notes';
import '../../../node_modules/toasted-notes/src/styles.css';

const VideoList = ({ location: { pathname }, history }) => {
  const [videos, setVideos] = useState(null);
  const [listIndex, setListIndex] = useState(0);
  const [isCheckMessage, setIsCheckMessage] = useState(false);
  let pathName = pathname.split('/')[2]
  const list = JSON.parse(localStorage.getItem("list"));

  useEffect(()=>{
    list.map((a,index)=> {
      if(a.listName === pathName) {
        setListIndex(index);
        setVideos(list[index]);
      }
      return null;
    });
  },[]);

  const openCheckMessage = () => {
    setIsCheckMessage(true);
  };

  const closeCheckMessage = () => {
    setIsCheckMessage(false);
  };

  const handleOkBtn = () => {
    localStorage.setItem('list', JSON.stringify(list.filter((v, index) => index !== listIndex)));
    history.push('/list');
    closeCheckMessage();
    toast.notify('삭제되었습니다.', { 
      position: 'bottom-left',
      duration: 2000 
    });
  };

  return (
    <>
    {videos &&
      <div className="videoList__container">
        <h2 className="videoListName">'{videos.listName}'</h2>
        <button className="deleteBtn" onClick={openCheckMessage}>목록 삭제</button>
        {videos.video.length > 0 
        ? <div className="Listsection__container">
            {videos.video.map(video => (
              <Video key={video.video_id} video={video} />
            ))}
          </div>
        : <div className="noVideoMessage">'추가한 비디오가 없어요.'</div>
        }
      </div>
    }
    {isCheckMessage ?
      <CheckMessage
        isOpen={openCheckMessage}
        close={closeCheckMessage}
        handleOkBtn={handleOkBtn}
        message='정말 삭제하시겠습니까?'
        btnMessage='삭제하기'
      />
      : null
    }
    </>
  );
};

export default withRouter(VideoList);