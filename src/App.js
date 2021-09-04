
import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//para que devuelva valores unicos sin que se repita or eso la propiedad Set 
const allCategories=new Set(items.map((item)=>item.category))
console.log(allCategories);

function App() {

  const [menuItems,setMenuItems]=useState(items);
  const[categories,setCategories]=useState([]);

  const filterItems=(category)=>{
    let newItems=''
    if (category==='all') {
        newItems=items
    }else{
      newItems=items.filter((item)=>item.category===category)

    }

      setMenuItems(newItems)
  }

  return <main>
      <section className="menu section">
        <div className="title">
            <h2>Comida</h2>

            <div className="underline">    </div>

        </div>
        <Categories filterItems={filterItems} allCategories={allCategories} />
        <Menu  key={menuItems.id} item={menuItems} />

      </section>

    </main>;
}

export default App;
