import {useEffect, useState} from 'react';
import {getImages, getSubBreeds} from '../../api';
// @ts-ignore
import Image from '../Common/Image';

function DogCard(props: any) {
  const [imgs, setImgs] = useState<string[]>([]);
  const [subs, setSubs] = useState<string[]>();
  const { data } = props;

  useEffect(() => {
    if (data.length > 0) {
      setImgs([]);
      setSubs([]);
      getSubBreeds(data).then(result => setSubs(result));
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
        ? <button type="button" className="card__refresh" onClick={
            () => getImages(imgs, data, false).then(result => setImgs(result))}
          >Load more</button>
        : ''}
    </div>
  );
}

export default DogCard;
