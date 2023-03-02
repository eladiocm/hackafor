// Components
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import { ProjectCard, ProjectWrapper } from '@/components/Project'
import { WarningTriangle } from 'iconoir-react'

// Styles
import styles from '../styles/home.module.css'

import { supabase } from '@/lib/client'
import { useEffect, useState } from 'react'
import ProjectLoader from '@/components/Loaders/ProjectLoader'

function Home() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getLastestProjects = async () => {
      setIsLoading(true)

      const { data: project, error } = await supabase
        .from('project')
        .select('*, user:profiles (username)')
        .order('created_at', { ascending: false })
        .limit(6)

      if (error) {
        console.error('Home page', error)
        setError(true)
        setIsLoading(false)
      }

      setProjects(project)
      setIsLoading(false)
    }

    getLastestProjects()
  }, [])

  if (error) {
    return (
      <Layout>
        <Hero />
        <section className={styles.projects}>
          <div className={styles.error}>
            <WarningTriangle /> Error fetching data
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <Hero />
      <section className={styles.projects}>
        <h2>Últimos proyectos</h2>

        {isLoading ? (
          <ProjectLoader />
        ) : (
          <ProjectWrapper>
            {projects?.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  pageImage={project.image_url}
                  technologies={project.technologies}
                  userName={project.user.username}
                />
              )
            })}
          </ProjectWrapper>
        )}
      </section>
    </Layout>
  )
}

export default Home
