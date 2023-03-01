import { Link } from 'react-router-dom'
import styles from './card.module.css'

function Card({ id, title, description, userName, technologies, pageImage }) {
  return (
    <Link to={`/project/${id}`} className={styles.card}>
      <figure className={styles.card__header}>
        <img src={pageImage} alt='Website image' />
      </figure>
      <div className={styles.card__main}>
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.tags}>
          {technologies?.map((technology, index) => {
            return (
              <div key={index} className={styles.tag}>
                {technology}
              </div>
            )
          })}
        </div>
      </div>
      <footer className={styles.card__footer}>
        <p>Creado por {userName}</p>
      </footer>
    </Link>
  )
}

export default Card
