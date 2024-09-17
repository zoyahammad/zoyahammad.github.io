import './SeeMoreButton.css'

const SeeMoreButton = ({ href }) => (
  <div className='about__contact center'>
    <a href={href}>
      <span type='button' className='btn btn--outline'>
        See More
      </span>
    </a>
  </div>
)

export default SeeMoreButton
