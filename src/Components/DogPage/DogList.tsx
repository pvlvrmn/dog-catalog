import React, { useState, useEffect } from 'react';
import DogElement from './DogElement';

function DogList(props: any) {
  // Breed list
  const [breeds, setBreeds] = useState<Array<String>>([]);
  const {
    list, query, selection, handleClick,
  } = props;

  useEffect(() => {
    setBreeds(list);
  }, [list]);

  return (
    <div className="dogs__tiles">
      {breeds?.map((breed) => {
        if (!query?.length || breed?.toLowerCase().includes(query?.toLowerCase())) {
          return (
            <DogElement key={breed} breed={breed} classActive={breed === selection ? 'active_tile' : null} onClick={((e: React.ChangeEvent<any>) => handleClick(e, breed as string))} />
          );
        }
        return '';
      })}
    </div>
  );
}

export default DogList;
