import React from 'react';
import '../Styles/Products.css';
import DucatiAllTerrain from '../Assets/ducatiAllterrain.jpg'
import TopIcon from '../Assets/topIcon.png'
import MidIcon from '../Assets/midIcon.png'
import BotIcon from '../Assets/botIcon.png'
import JungleIcon from '../Assets/jungleIcon.png'
import ClassesIcons from '../Assets/classesIcons.png'

function Products() {
  return (
    <section className='products' id='products'>
        <div className='products__container'>
        <h1 className='roles'>ROLES AVAILABLE: </h1>
            <div className='products__card-wrapper'>
                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={TopIcon} className='products__card-img'></img>
                    </div>
                    <h1 className='role1'> Top Lane</h1>
                    <p className='products__card-description'>Top lane has long been known as an island because of the combination of being a long lane, side lane, and solo lane.</p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={MidIcon} className='products__card-img'></img>
                    </div>
                    <h1 className='role1'> Mid Lane </h1>
                    <p className='products__card-description'>Mid is the perfect lane for people wanting to lane but also play a role similar to a Jungler and helps drive the tempo.</p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={BotIcon} className='products__card-img'></img>
                    </div>
                    <h1 className='role1'> Bot Lane </h1>
                    <p className='products__card-description'>The bottom position is heavily focused around fighting potential given that is in closer proximity to the Dragon pit where many fights take place over capture of the objective.</p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={JungleIcon} className='products__card-img'></img>
                    </div>
                    <h1 className='role1'> Jungle </h1>
                    <p className='products__card-description'>The jungle position provides a safe avenue to obtain gold and experience through killing monsters in jungle camps, without much interference from opponents.</p>
                </div>

                
                <div className='products__goals-card'>
                    <div className='products__goals-card-img-wrapper'>
                        <img src={ClassesIcons} className='products__goals-card-img'/>
                    </div>
                    <div className='products__goals-card-description-wrapper'>
                        <h1 className='classes'>Classes in League of Legends: </h1>
                        <p className='products__goals-card-description'>Every champion in League of Legends has an assigned class, with a limited number also being considered in a secondary class. Classes and their interactions with one another influence gameplay pacing and decisions.</p>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Products