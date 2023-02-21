import Card from '../Card/Card'

const TECHNOLOGIES = ['React', 'SQL', 'Prisma', 'Prisma', 'Prisma']

export function Projects() {
  return (
    <>
      <Card
        avatar='/88462463.png'
        title='Project Name'
        likes={50}
        technologies={TECHNOLOGIES}
        userName='techwithmat'
        pageImage='/page.png'
      />
      <Card
        avatar='/88462463.png'
        title='Project Name'
        likes={50}
        technologies={TECHNOLOGIES}
        userName='techwithmat'
        pageImage='/page.png'
      />
      <Card
        avatar='/88462463.png'
        title='Project Name'
        likes={50}
        technologies={TECHNOLOGIES}
        userName='techwithmat'
        pageImage='/page.png'
      />
    </>
  )
}
