import React from 'react';

const Categories = ({filterItems,allCategories}) => {

  // ..convertir el set en array
  var categorie=[...allCategories];

  // ver si se conveitio en array
  // console.log(categorie);

  
  return <div className="btn-container" >
    <button className="filter-btn" 
    onClick={()=>filterItems('all')} > 
      All
    </button>

      {categorie.map((c,index)=>
         <button className="filter-btn" key={index} onClick={()=>filterItems(c)} > 
          {c}
         </button>
      )}
     

      
    </div>;



};

export default Categories;