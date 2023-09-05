import React, { useState, useEffect } from 'react';
import Search from './Search';
import DogList from './DogList';
import DogCard from './DogCard';
import { capitilizeWord, flattenObject } from '../../api/index';

function DogPage() {
  // Breed list
  const [breeds, setBreeds] = useState<Array<String>>([]);
  // Search string
  const [query, setQuery] = useState<string>('');
  // Selected breed
  const [selection, setSelection] = useState<string>('');

  /*
     *  Event Handelrs
     */
  const handleQuery = (queryString: string):void => {
    setQuery(queryString);
  };

  const handleClick = (e: React.ChangeEvent<any>, data: string) => {
    setSelection(data);
  };

  // API handler
  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://dog.ceo/api/breeds/list/all', {
        method: 'GET',
      });
      const jsonData = await data.json();
      const rawData = flattenObject(jsonData.message);
      const result = rawData.map((x) => capitilizeWord(x));
      setBreeds(result);
    };

    api();
  }, []);

  return (
    <>
      <div className="dogs__wr">
        <Search onSearch={handleQuery} />
        <DogList handleClick={handleClick} query={query} selection={selection} list={breeds} />
      </div>
      <DogCard data={selection} />
    </>
  );
}

export default DogPage;
