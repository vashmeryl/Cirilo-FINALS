import React from 'react';
import '../Styles/Products.css';
import DucatiV2 from '../Assets/ducatiV2.jpg'
import DucatiV3 from '../Assets/ducatiV3.jpg'
import DucatiV4 from '../Assets/ducatiV4.jpg'
import DucatiV4s from '../Assets/ducatiV4S.jpg'
import DucatiAllTerrain from '../Assets/ducatiAllterrain.jpg'

function Products() {
  return (
    <section className='products' id='products'>
        <div className='products__container'>
            <div className='products__card-wrapper'>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={DucatiV2} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>The Panigale V1 is powered by a 1103cc Desmosedici Stradale engine, delivering an exhilarating 214 horsepower. </p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={DucatiV3} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>At the heart of the Panigale V2 is a 955cc Superquadro twin-cylinder engine that produces 155 horsepower and 104 Nm of torque.</p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={DucatiV4} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>The Panigale V3 is powered by a state-of-the-art 1103cc Desmosedici Stradale V4 engine, delivering an astonishing 217 horsepower and 123 Nm of torque.</p>
                </div>

                <div className='products__card'>
                    <div className='products__card-img-wrapper'>
                        <img src={DucatiV4s} className='products__card-img'></img>
                    </div>
                    <p className='products__card-description'>At the heart of the Panigale V4S is a powerful 955cc Superquadro twin-cylinder engine, delivering an impressive 155 horsepower and 104 Nm of torque.</p>
                </div>

                
                <div className='products__goals-card'>
                    <div className='products__goals-card-img-wrapper'>
                        <img src={DucatiAllTerrain} className='products__goals-card-img'/>
                    </div>
                    <div className='products__goals-card-description-wrapper'>
                        <p className='products__goals-card-description'>The Ducati Multistrada V4 is a versatile adventure touring motorcycle designed to conquer any terrain with ease. Built to deliver exceptional performance both on and off-road, the Multistrada V4 combines Ducati's legendary engineering with advanced technology and comfort features, making it the perfect companion for epic adventures.</p>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Products