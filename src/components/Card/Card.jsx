import { SaveIcons } from '../Icons'
import './Card.css'

export function Card() {
  return (
    <div className='card'>
      <div className='img'>
        <img src='../../../public/page.png' alt='' />
        <div className='save'>
          <SaveIcons />
        </div>
      </div>

      <div className='text'>
        <p className='h3'> Name Project </p>
        <div className='card-info-creator'>
          <p>creado por</p>
          <div className='info-user'>
            <img src='../../../public/88462463.png' alt='' />
            <p className='p'>UserName </p>
          </div>
        </div>
        <div className='card-technology-project'>
          <div>React</div>
          <div>SQL</div>
          <div>TypeScript</div>
        </div>
      </div>
    </div>
  )
}
