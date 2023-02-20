import React, {useState} from 'react'
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  // eslint-disable-next-line
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
    
  }
  
  return (
    <section className='work section' id="portfolio">
    <h2 className='section__title'>Projects</h2>
    <span className='section__subtitle'>Recent works</span>

   
    <div className='work__container grid'>
      {items.map((elem) => {
        const{ id, image, title, category} = elem;
        return(
          <div className='work__card' key={id}>
            <div className='work__thumbail'>
              <img src={image} alt="" className='work__img' />
              <div className='work__mask'></div> 
            </div>

            <span className='work__category'>{category}</span>
            <h3 className='work__title'>{title}</h3>
            <a href="#wew" className='work__button'>
              <i className='uil-arrow-growth work__button-icon'></i>
            </a>


          </div>  
        )
      })}
    </div>


    </section>
  )
}

export default Portfolio