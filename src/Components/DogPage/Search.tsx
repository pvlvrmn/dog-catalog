import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as ClearIcon } from '../../assets/clear.svg';

function Search(props: any) {
  const [query, setQuery] = useState('');

  const onInput = (e: React.ChangeEvent<any>) => {
    setQuery(e.target.value);
    const { onSearch } = props;
    onSearch(e.target.value);
  };

  const onClear = () => {
    setQuery('');
    const { onSearch } = props;
    onSearch('');
  };

  return (
    <div className="search__wr">
      <span className="search__icon">
        <SearchIcon />
      </span>
      <input className="search__input" placeholder="Search breed" value={query} onInput={onInput} />
      <button className="search__clear" type="button" onClick={onClear} style={query.length > 0 ? { opacity: 1 } : { opacity: 0 }}>
        <ClearIcon />
      </button>
    </div>
  );
}

export default Search;
