// https://github.com/dilpreetsio/react-simple-rotating-text
import './index.css'
import React from 'react'

interface Organization {
  id: string
  prefLabel: {
    nb: string
  },
  datasetCount: string
}

interface Props {
  organizations: Organization[]
  duration?: number
  className?: string
  color?: string
  direction?: 'vertical' | 'horizontal'
}

const RotatingText = ({
  organizations,
  duration = 2.5,
  direction = 'vertical',
  className,
  color
}: Props) => {
  const createText = (name: string, id: string, datasetCount: string, startTime: number) => (
    <span
      key={name + startTime}
      style={{
        animation: `${direction}-rotate ${duration
          }s linear infinite 0s`,
        animationDelay: `${startTime}s`,
        color: color || 'inherit'
      }}
      className={className || ''}
    >
      {name}
    </span>
  )
  
  return (
    <>
      <span className='rotating-text-container'>
        {organizations.map((org, i) => createText(org.prefLabel.nb, org.id, org.datasetCount, i * duration))} &nbsp;
      </span>
    </>
  )
}

export default RotatingText


{/* har {randomOrg.datasetCount} datasett */}
{/* <a href={`https://www.data.norge.no/organizations/${randomOrg.id}`} target="_blank" rel="noopener noreferrer"></a> */}