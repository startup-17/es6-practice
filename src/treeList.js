import React from 'react';


const List = (props) => {

  const {item, onClick} = props;

  return (<ul>
    { item.map((item, index) =>
      <li key={index} onClick = {onClick} data-index = {index}> {item.type}
      {item.isShow ?
      (<ul>
        {item.people.map((item, index) =>
          <li key = {index}>{item.name}
            {item.isShow ?
              <ListItem
              age = {item.age}
              sex = {item.sex}
              role = {item.role}
             /> : (null)
          }
          </li>
        )}
      </ul>)
      : (null)}
      </li>
    )}
  </ul>);

}
const ListItem = (item) => {
  return (<ul>
            <li>{item.age}</li>
            <li>{item.sex}</li>
            <li>{item.role}</li>
          </ul>);
}


export default List;