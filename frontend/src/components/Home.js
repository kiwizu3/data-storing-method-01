import React, { useState } from 'react';
import List from './List/List';

const listData = [
  {
    name: "Kiwi",
    image: "kiwi",
    number: 9,
  },
  {
    name: "Nimona",
    image: "nimona",
    number: 3,
  },
  {
    name: "Kimi",
    image: "kini",
    number: 2,
  },
  {
    name: "Malith",
    image: "malith",
    number: 8,
  },
  {
    name: "Sigithi",
    image: "sigithi",
    number: 5,
  },
]

const Home = () => {

  const [searchedList, setSearchedList] = useState(listData);

  const searchItems = (e) => {
    const searchKey = e.target.value;
    const filteredData = listData.filter(listItem => (listItem.name.toLowerCase()).includes(searchKey.toLowerCase()) || listItem.number.toString().includes(searchKey))
    setSearchedList(filteredData);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="title-special text-center my-4">The <span className="text-primary">List</span></h1>

            <input className="form-control border-primary rounded-0 p-2 mb-3" placeholder="Search Here" onChange={searchItems} />

            <List listData={searchedList} />

          </div>
        </div>
      </div>
    </>
  );
}
export default Home;