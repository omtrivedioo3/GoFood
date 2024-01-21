import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Home({ user, setLoginUser }) {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0])
    setFoodCat(response[1])
    // console.log(response[0],response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div><Navbar user={user} setLoginUser={setLoginUser} /></div>
      <div>
        <div className="d-flex justify-content-center">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} style={{
            "margin-top": "5rem",
            "margin-bottom": "3rem",

            "width": "450px",
            "border-radius": "55px",

          }} onChange={(e) => { setSearch(e.target.value) }} />
        </div>
        <div className='container'>
          {
            foodCat.length !== 0
              ? foodCat.map((data) => {
                return (
                  <div className='row mb-3'>
                    <div key={data._id} className='fs-3 m-3' >
                      {data.CategoryName}
                    </div>
                    <hr />
                    {foodItem.length !== 0 ?
                      foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                        .map(filterItems => {
                          return (
                            <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                              <Card foodItem={filterItems}
                                options={filterItems.options[0]}
                              ></Card>
                            </div>
                          )
                        }


                        ) : <div>No such data</div>}
                  </div>
                )
              })
              : ""
          }

        </div>
      </div>
      <div><Footer /></div>
    </div>
  )
}
