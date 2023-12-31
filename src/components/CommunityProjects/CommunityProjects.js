import uniqid from 'uniqid'
import { communityprojects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './CommunityProjects.css'

const CommunityProjects = () => {
  if (!communityprojects.length) return null

  return (
    <section id='communityprojects' className='section CommunityProjects'>
      <h2 className='section__title'>Community Projects</h2>

      <div className='communityprojects__grid'>
        {communityprojects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default CommunityProjects
