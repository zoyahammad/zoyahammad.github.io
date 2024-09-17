import uniqid from 'uniqid'
import { hackathons } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Hackathons.css'
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton'

const Hackathons = () => {
  if (!hackathons.length) return null

  return (
    <section id='Hackathons' className='section Hackathons'>
      <h2 className='section__title'>Hackathons</h2>

      <div className='Hackathons__grid'>
        {hackathons.map((hackathon) => (
          <ProjectContainer key={uniqid()} project={hackathon} />
        ))}
      </div>
      <SeeMoreButton href='https://devpost.com/zoya-hammad'/>
    </section>
  )
}

export default Hackathons
