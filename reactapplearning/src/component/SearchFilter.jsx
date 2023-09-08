import React,{useState} from 'react';

const items = ['Apple', 'Banana', 'Carrot', 'Date', 'Eggplant', 'Fig', 'Grape'];

function SearchFilter() {
    const [search, setSearch] = useState('');

    var filterdItem = items.filter((item)=>item.toLowerCase().includes(search.toLowerCase())

    );

  return (
    <div>
      <input type="text" />
      <ul>
      {filterdItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;