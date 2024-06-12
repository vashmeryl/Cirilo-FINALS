import React from 'react'
import '../Styles/Background.css';
import DucatiLogo from '../Assets/ducatiLogo.png';
import Location from '../Assets/location.jpg';
import DucatiCEO from '../Assets/ducatiCEO.png';
import DucatiBuilding from '../Assets/ducatiBuilding.jpg';

function Background() {
  return (
    <section className='background' id='background'>
        <div className='background__container'>
            <div className='background__left-content'>

                <div className='background__banner-logo-wrapper'>
                    <div className='background__banner-logo-card'>
                        <div className='background__banner-logo-card-img-wrapper'>
                            <img src={DucatiLogo} className='background__banner-logo'/>
                        </div>  
                        <p className='background__banner-logo-description'>The Ducati logo represents the renowned Italian motorcycle manufacturer, known for its high-performance bikes. The emblem typically features a sleek, modern design with a red background, signifying passion and energy, which are core elements of the Ducati brand.</p>
                    </div>
                </div>

                <div className='background__card-wrapper'>
                    <div className='background__card'>
                        <div className='background__card-img-wrapper'>
                            <img src={Location} className='background__card-img'/>
                        </div>  
                        <p className='background__card-description'>The company's headquarters are located in Borgo Panigale, Bologna, Italy, a region known for its rich automotive heritage.</p>
                    </div>
                </div>

                <div className='background__card-wrapper'>
                    <div className='background__card'>
                        <div className='background__card-img-wrapper'>
                            <img src={DucatiCEO} className='background__card-img'/>
                        </div>  
                        <p className='background__card-description'>Claudio Domenicali is the current CEO of Ducati. He has been with the company for many years and has played a significant role in its growth and success.</p>
                    </div>
                </div>
            </div>

            <div className='background__right-content'>
                <div className='background__building-card'>
                    <div className='background__building-img-wrapper'>
                        <img src={DucatiBuilding} className='background__building-img'></img>
                    </div>
                    <p className='background__building-description'>The Ducati headquarters building is a blend of modern design and industrial functionality. It features sleek lines, extensive use of glass, and a dynamic layout that reflects the brand's commitment to innovation and performance.</p>
                </div>
            </div>
        </div>

        <div class="custom-shape-divider-bottom-1718184911">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" class="shape-fill"></path>
    </svg>
</div>
    </section>
  )
}

export default Background