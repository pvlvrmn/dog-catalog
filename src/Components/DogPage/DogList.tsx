import {useEffect, useState} from 'react';
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
            <DogElement key={breed} breed={breed} classActive={breed === selection ? 'dogs__tile_active' : null} onClick={(() => handleClick(breed as string))} />
          );
        }
        return '';
      })}
    </div>
  );
}

export default DogList;
