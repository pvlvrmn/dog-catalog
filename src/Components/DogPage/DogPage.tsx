import { useState, useEffect } from 'react';
import Search from './Search';
import DogList from './DogList';
import DogCard from './DogCard';
import { getBreeds } from '../../api/index';

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

  const handleClick = (data: string) => {
    setSelection(data);
  };

  // API handler
  useEffect(() => {
    getBreeds().then((result) => setBreeds(result));
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
