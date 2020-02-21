import { useState } from 'react'
import toast from 'toasted-notes';
import '../../../node_modules/toasted-notes/src/styles.css';

const useModal = (video) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  var toastMessage = '목록에 추가되었습니다.';

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChecked = (event) => {
    let list = JSON.parse(localStorage.getItem("list"));
    list.map((item, index) => {
      if(item.listName === event.target.value){
        // 1개 이상 비디오가 있는 경우
        if(list[index]['video']) {
          // 중복 check
          let isDuplicate = list[index]['video'].some(v => {
            if(v.video_id === video.video_id) {
              return true;
            }
            return false;
          });
          if(!isDuplicate && list[index]['video'].length < 20) {
            list[index]['video'].push(video);
          } else {
            isDuplicate ? toastMessage ='이미 포함하고 있습니다.'
            : toastMessage ='최대 갯수 20개 초과하여 저장불가';
          }

        } else { // 비디오가 없는 경우
          list[index]['video'] = [video];
        }
        localStorage.setItem("list", JSON.stringify(list));
      }
      return null;
    });
    closeModal();
    toast.notify(toastMessage, { 
      position: 'bottom-left',
      duration: 2000 
    });
  };

  return { isModalOpen, openModal, closeModal, handleChecked };
}

export default useModal;