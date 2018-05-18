import React from 'react';


const List = (props) => {
  const { items, onDelete, onChange } = props;
  console.log(props);
  return (<ul>
    { items.map((item, index) =>
      <li key={index}>
      <input
        type="checkbox"
        data-index={index}
        checked={item.complete}
        onChange = {onChange}/>
      { item.value }
      <button data-index={index} onClick={onDelete} >delete</button>
      </li>
    )}
  </ul>);

}

export default List;