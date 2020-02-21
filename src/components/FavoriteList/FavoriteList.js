import React from 'react';

import './FavoriteList.scss';
import FavoriteItem from 'components/FavoriteItem';
import useModal from 'components/Modal/useModal';
import Modal from 'components/Modal';

const FavoriteList = () => {
  const { isModalOpen, openModal, closeModal, handleChecked } = useModal();
  const list = JSON.parse(localStorage.getItem("list"));

  return (
   <>
    <div className="favoriteList__container">
      <span className="favoriteList__title">나의 목록</span>
      <span>
        <button className="createBtn" onClick={openModal}>
          <i className="fa fa-plus-circle" style={{ fontSize: `20px`}}>&nbsp;새로 만들기</i>
        </button>
      </span>
      <div className="favoriteList">
      {list && list.map((favoriteList, index) => (
        <FavoriteItem
          key={`${favoriteList.listName}${index}`}
          list={favoriteList}
        />
      ))}
      </div>
    </div>
    {isModalOpen && 
      <Modal isOpen={isModalOpen}
             close={closeModal}
             handleChecked={handleChecked}
             isHome={false}
      />
    }
   </>
  );
};

export default FavoriteList;