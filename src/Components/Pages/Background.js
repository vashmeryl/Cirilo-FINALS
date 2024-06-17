import React from 'react'
import '../Styles/Background.css';
import LeagueVector from '../Assets/leagueVector.png';
import Runeterra from '../Assets/runeterra.png';
import AramIcon from '../Assets/aramIcon.png';
import RiftIcon from '../Assets/riftIcon.png';

function Background() {
  return (
    <section className='background' id='background'>
        <div className='background__container'>
            <div className='background__left-content'>

                <div className='background__banner-logo-wrapper'>
                    <div className='background__banner-logo-card'>
                        <div className='background__banner-logo-card-img-wrapper'>
                            <img src={LeagueVector} className='background__banner-logo'/>
                        </div>
                        <h1 className='h1'>What is League of Legends?</h1>
                        <p className='background__banner-logo-description'>League of Legends is a team-based strategy game where two teams of five powerful champions face off to destroy the other’s base. Choose from over 168 champions to make epic plays, secure kills, and take down towers as you battle your way to victory.</p>
                        <h1 className='h1'>League has two gamemodes: </h1>
                    </div>
                </div>

                <div className='background__card-wrapper'>
                    <div className='background__card'>
                        <div className='background__card-img-wrapper'>
                            <img src={RiftIcon} className='background__card-img'/>
                        </div>  
                        <h1 className='rift'>SUMMONER'S RIFT (NORMAL GAME)</h1>
                        <p className='background__card-description'>Summoner's Rift is a 5v5 multiplayer map wherein the objective is to destroy the enemy's nexus.</p>
                    </div>
                </div>

                <div className='background__card-wrapper'>
                    <div className='background__card'>
                        <div className='background__card-img-wrapper'>
                            <img src={AramIcon} className='background__card-img'/>
                        </div>
                        <h1 className='aram'>ALL RANDOM ALL MID (ARAM)</h1>
                        <p className='background__card-description'>Upon entering champion selection, ten summoners, five on each team, randomly summon a champion from their available pool of champions.</p>
                    </div>
                </div>
            </div>

            <div className='background__right-content'>
                <div className='background__building-card'>
                <h1 className='runeterra'>RUNETERRA</h1>
                    <div className='background__building-img-wrapper'>
                        <img src={Runeterra} className='background__runeterra-img'></img>
                    </div>
                    <p className='background__runeterra-description'>Runeterra (meaning magic earth) is a plane of existence composed of the physical realm: an oblate spheroid planet and the Spirit Realm. It is also the fictional world where most of the lore of the League of Legends icon League of Legends intellectual property takes place. Runeterra is part of the larger Runeterra Map profileicon Runeterra Prime universe.</p>
                    <p className='background__runeterra2-description'>The planet orbits around a G-type star while a natural satellite moon orbits around the planet. Runeterra's sun and moon also even mirrored equivalents in the spirit realm.</p>
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