import React from 'react';
import { Link } from 'react-router-dom';

import './FavoriteItem.scss';
import noImage from 'lib/Image/noImage.jpg';

const FavoriteItem = ({ list }) => {
    let listImage = (list.video.length > 0)
                    ? list.video[0].thumbnail
                    : noImage;
    
    return (
        <div className="favoriteItem__container">
          <Link to={`/list/${list.listName}`} className="itemLink">
            <img src={listImage} alt="listImage" />
            <div className="favoriteItem__detail">
              <h2>{list.listName}</h2>
              <div>{list.video ? list.video.length : 0} 개</div>
            </div>
          </Link>
        </div>
    );
};

export default FavoriteItem;