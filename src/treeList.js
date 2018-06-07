import React from 'react';
const PeopleList = (item) => {
  const peopleDom = item.people.map((item, index) =>
    <li key = {index}>{item.name}</li>)
  const dom = item.isShow ? peopleDom : null;
  return <ul>{dom}</ul>
}

const List = (props) => {

  const {item, onClick} = props;
  const doms =  item.map((item, index) =>
  <li
    key={index}
    onClick={onClick}
    data-index={index}
  >
    {item.type}
    <PeopleList
      people = {item.people}
      isShow = {item.isShow}
    />
  </li>
)

  return (<ul>{doms}</ul>);

}


export default List;