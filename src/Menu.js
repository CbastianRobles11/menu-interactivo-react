import React from 'react';

const Menu = ( {item} ) => {
  
    return( <div className="section-center" >
        {item.map((menuItem)=>{

            const{id,title,img,desc,price}=menuItem;
           
            // retorna un html el map
            return( 
            <article key={id} className="menu-item" >
                <img src={img} alt={title} className='photo' />
                <div className="item-info" >
                    <header> 
                        <h4>{title}</h4>
                        <h4 className="price">{price}</h4>
                        <p className="item-text" >{desc}</p>
                   </header> 
                </div>
                
            </article>);

        })}    

    </div>);
};

export default Menu;