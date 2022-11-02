import React from 'react'
import './portfolio.css'

import Img1 from '../../assets/portfolio_1.webp'
import Img2 from '../../assets/portfolio_2.webp'
import Img3 from '../../assets/portfolio_3.webp'
import Img4 from '../../assets/portfolio_4.webp'
import Img5 from '../../assets/portfolio_5.webp'
import Img6 from '../../assets/portfolio_6.webp'

const data = [{
  id: 1,
  image: Img1,
  title: "Crypto Currency DashBoard e Financial Visualization",
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
},
{
  id: 2,
  image: Img2,
  title: 'Charts Templates & Infographics in Figma',
  github: 'https://github.com/',
  demo: 'https://dribbble.com/shots/16580766-Orion-UI-Kit-Charts-Templates-data-visualization'
},
{
  id: 3,
  image: Img3,
  title: "Figma DashBoard UI Kit for data design web apps",
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboards-UI-Kit-for-data-design-web-apps'
},
{
  id: 4,
  image: Img4,
  title: "Maintaining tasks and tracking progress",
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
},
{
  id: 5,
  image: Img5,
  title: 'Charts Templates & Infographics in Figma',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/16541289-Orion-UI-Kit-Charts-templates-infographics-in-Figma'
},
{
  id: 6,
  image: Img6,
  title: 'Charts Templates & Infographics in Figma',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shots/15887665-Orion-UI-Kit-Charts-templates-infographics-in-Figma'
}
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" >Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}

export default Portfolio