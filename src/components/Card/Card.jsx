import './Card.css'
import { SaveIcons } from '../Icons'

function Card({ title, avatar, userName, technologies, likes, pageImage }) {
  return (
    <div className='card'>
      {/** Probably this image will be replaced with Cloudinary SDK */}
      <figure className='img'>
        <img src={pageImage} alt={''} />
        <div className='save'>
          <SaveIcons />
        </div>
      </figure>

      <div className='card-main'>
        <h3 className='h3'>{title}</h3>
        <div className='card-info-creator'>
          <p>Creado por</p>
          <div className='info-user'>
            <img src={avatar} alt={`Avatar of ${userName}`} />
            <p className='p'>{userName}</p>
          </div>
        </div>

        <div className='card-technology-project'>
          {/** Each Technology tag can be a component */}
          {technologies?.map((technology, index) => {
            return <div key={index}>{technology}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
