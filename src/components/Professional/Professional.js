import uniqid from 'uniqid'
import { professional } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Professional.css'
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton'

const Professional = () => {
  if (!professional.length) return null

  return (
    <section id='professional' className='section professional'>
      <h2 className='section__title'>professional</h2>

      <div className='Professional__grid'>
        {professional.map((hackathon) => (
          <ProjectContainer key={uniqid()} project={hackathon} />
        ))}
      </div>
      <SeeMoreButton href='https://devpost.com/zoya-hammad'/>
    </section>
  )
}

export default Professional
