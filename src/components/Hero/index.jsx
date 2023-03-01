import styles from './hero.module.css'
import SearchBar from '@/components/SearchBar'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__title}>
        <h1 className={styles.title}>
          Un espacio en línea para proyectos de{' '}
          <span className={styles.underline}>la comunidad</span>
        </h1>
        <p className={styles.subtitle}>
          Comparte tus proyectos, encuentra inspiración y conecta con la
          comunidad.
        </p>
        <SearchBar />
      </div>
      <div className={styles.hero__image}>
        <img src='/hero.svg' />
      </div>
    </section>
  )
}

export default Hero
