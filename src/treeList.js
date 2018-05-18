import React from 'react';


const List = (props) => {

  const {item, onClick, isshow, style} = props;

  return (<ul>
    { item.map((item, index) =>
      <li key={index} onClick = {onClick} data-index = {index}> {item.type}
      {item.isShow ?
      (<ul>
        {item.people.map((item, index) =>
          <li key = {index}>{item.name}</li>
      )}</ul>)
      : (null)}

      </li>
    )}
  </ul>);

}

export default List;