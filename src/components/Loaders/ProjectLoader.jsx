import { LineWobble } from '@uiball/loaders'

function ProjectLoader() {
  return (
    <div
      style={{
        marginTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}
    >
      <LineWobble color='#2563eb' /> <span>Loading...</span>
    </div>
  )
}

export default ProjectLoader
