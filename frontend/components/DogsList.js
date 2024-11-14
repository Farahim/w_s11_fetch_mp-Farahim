import React from 'react'

export default function DogsList( dogs, getDogs,setCurrentDogs ) {
  return (
    <div>
      <h2>Dogs Shelter</h2>
      <ul>
          {
              dogs.map(dog => (
                  <li key={dog.id}>
                      {dog.name}, {dog.bread}, {dog.adapted? '' : 'NOT'}adopted
                      <div>
                          <button>Edit</button>
                          <button>Delete</button>
                      </div>
                  </li>
              ))
          }
      </ul>
    </div>
  )
}
