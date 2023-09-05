import React, { useState, useEffect } from 'react';
import Image from '../Common/Image';
import { capitilize } from '../../api/index';

function DogCard(props: any) {
  const [imgs, setImgs] = useState<string[]>([]);
  const [subs, setSubs] = useState<string[]>();
  const { data } = props;

  const getImages = async (isChanged = false) => {
    console.log(isChanged);
    // setImgs([]);
    if (data.length !== 0) {
      const dataImages = await fetch(`https://dog.ceo/api/breed/${data.toLowerCase()}/images/random/3`, {
        method: 'GET',
      });
      const jsonData = await dataImages.json();
      if (isChanged) {
        setImgs(jsonData.message);
      } else {
        setImgs([...imgs, ...jsonData.message]);
      }
    }
  };

  // API for images
  useEffect(() => {
    const getSubBreeds = async () => {
      const dataBreeds = await fetch(`https://dog.ceo/api/breed/${data.toLowerCase()}/list`, {
        method: 'GET',
      });
      const jsonData = await dataBreeds.json();
      const result = await capitilize(jsonData.message);
      setSubs(result);
    };

    if (data.length>0) {
      setImgs([]);
      setSubs([]);
      getImages(true);
      getSubBreeds();
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
      {(props?.data.length !== 0) ? 
        <button type="button" className="card__refresh" href="#" onClick={() => getImages(false)}>Load more</button>
        : ''
      }
    </div>
  );
}

export default DogCard;
