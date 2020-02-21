import React from 'react';

import './Video.scss';
import useModal from 'components/Modal/useModal';
import Modal from 'components/Modal';

const Video = ({ video }) => {
  const { video_id, title, thumbnail, published_at } = video;
  const { isModalOpen, openModal, closeModal, handleChecked } = useModal(video);

  return (
    <>
      <div className="video__container">
        <div className="thumbnail">
          <a href={`https://www.youtube.com/embed/${video_id}`} target="_blank" rel="noopener noreferrer">
            <img src={thumbnail} alt="thumbnail"/>
          </a>
        </div>
        <div className="thumbnail__detail">
          <div className="thumbnail__title">
            {title}
          </div>
          <i className="fa fa-plus-square" 
            style={{ fontSize: `23px`}}
            onClick={openModal}
          ></i>
        </div>
      </div>
      {isModalOpen && 
        <Modal isOpen={isModalOpen}
               close={closeModal}
               handleChecked={handleChecked}
               isHome
               video={video}
        />
      }
    </>
  );
};

export default Video;