import { useState, useEffect } from 'react';
import { getSubBreeds, getImages } from '../../api/index';
// @ts-ignore
import Image from '../Common/Image';
// const Image = require('../Common/Image');

function DogCard(props: any) {
  const [imgs, setImgs] = useState<string[]>([]);
  const [subs, setSubs] = useState<string[]>();
  const { data } = props;



  // API for images
  useEffect(() => {


    if (data.length > 0) {
      setImgs([]);
      setSubs([]);
      getSubBreeds().then(result => setSubs(result));
      getImages(imgs, data, true).then(result => setImgs(result));
    }
  }, [data]);

  return (
    <div className="card__wr">
      <div className="card__title">
        {data}
      </div>
      <div className="card__subbreads">
        {subs?.map((sub) => (
          <div className="card__subbread">{sub}</div>
        ))}
      </div>
      <div className="card__images">
        {imgs?.map((img) => (
          <Image src={img} />
        ))}
      </div>
      <div className="clear" />
      {(props?.data.length !== 0)
        ? <button type="button" className="card__refresh" onClick={() => getImages(imgs, data, false).then(result => setImgs(result))}>Load more</button>
        : ''}
    </div>
  );
}

export default DogCard;
