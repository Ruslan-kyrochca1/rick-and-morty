import { useState } from 'react';
import classes from './ImageItem.module.scss';
import fallbackImage from '../../../assets/img/no-image.png';
import type { ImageItemType } from '../../../types/types';

const ImageItem = ({ image, name }: ImageItemType) => {
  const [img, setImg] = useState<string | undefined>(image);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={classes.imageWrapper}>
      {isLoading && <div className={classes.loader}></div>}
      <img
        className={`${classes.img} ${isLoading ? classes.hidden : ''}`}
        referrerPolicy="no-referrer"
        src={img}
        onLoad={() => {
          setIsLoading(false);
        }}
        onError={() => {
          setImg(fallbackImage);
          setIsLoading(false);
        }}
        alt={`photo ${name}`}
      />
    </div>
  );
};

export default ImageItem;
