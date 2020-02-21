import React, { useRef, useEffect, useState } from 'react';

import './Modal.scss';
import toast from 'toasted-notes';
import '../../../node_modules/toasted-notes/src/styles.css';

const Modal = ({ isOpen, close, handleChecked, isHome, video }) => {
  const [listName, setListName] = useState('');
  const [listDetail, setListDetail] = useState([]);
  const [isCreateList, setIsCreateList] = useState(false);
  const nameRef = useRef(null);
  var toastMessage = '목록에 추가되었습니다.';

  useEffect(() => {
    if(isCreateList) {
      nameRef.current.focus();
    }
    if(!isHome) {
      nameRef.current.focus();
    }
  },[isCreateList, isHome]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("list"));
    if(list) {
      setListDetail(list);
    }
  },[]);

  const openCreateList = () => {
    setIsCreateList(true);
  };

  const enterSubmit = (event) => {
    if(event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(listName !== "") {
      if(isHome) {
        var addlist = [...listDetail, {"listName": listName, "video": [video]}];
        toastMessage = '목록에 추가되었습니다';
      } else {
        addlist = [...listDetail, {"listName": listName, "video": []}];
        toastMessage = '목록이 생성되었습니다.';
      }
      localStorage.setItem("list", JSON.stringify(addlist));
      close();
      toast.notify(toastMessage, { 
        position: 'bottom-left',
        duration: 2000 
      });
    }
  };
  
  return (
    <>
    {isOpen ?
      <>
        <div className="modal-overlay" onClick={close}/>
        <div className="modal__container">
          <p className="title">목록 추가하기</p>
          <div className="content">
           {isHome &&
            <ul>
            {listDetail.map((list, index)=> (
              <li key={index}>
                <input type="checkbox" name="list"
                       value={list.listName}
                       onChange={handleChecked}
                />
                &nbsp;&nbsp;&nbsp;{list.listName}
              </li>
            ))}
            </ul>
           }
            {!isCreateList && isHome
              ? <div onClick={openCreateList}
                     style={{ paddingBottom: `16px` }}
                >
                  <i className="fa fa-plus"></i>
                  &nbsp;&nbsp;새 목록 만들기
                </div>
              : <>
                 <div>이름</div>
                 <input 
                  className="listName" 
                  placeholder="목록 이름 입력해주세요."
                  value={listName}
                  onChange={(e) => setListName(e.target.value)}
                  onKeyUp={enterSubmit}
                  ref={nameRef}
                 />
                </>
            }
          </div>
          {(isCreateList || !isHome) && 
            <div className="button__wrap">
              <button onClick={handleSubmit}>만들기</button>
            </div>
          }
        </div>
      </>
      :
      null
    }
    </>
  );
};

export default Modal;