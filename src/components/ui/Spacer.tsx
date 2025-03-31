import React, { ReactNode } from 'react'

interface SpacerProps {
  size: string | string[]
  horizontal?: boolean
  parentStackGap?: string
  className?: ReactNode
}

const Spacer: React.FC<SpacerProps> = ({ size, horizontal = false, parentStackGap = '0' }) => {
  const parseSize = (value: string) => {
    return value.match(/^\d/) ? value : `0px`
  }

  const styles: React.CSSProperties = Array.isArray(size)
    ? {
        [horizontal ? 'width' : 'height']: parseSize(size[0]),
        marginLeft: horizontal ? `-${parseSize(parentStackGap)}` : '0px',
        marginRight: horizontal ? `-${parseSize(parentStackGap)}` : '0px',
        marginTop: horizontal ? '0px' : `-${parseSize(parentStackGap)}`,
        marginBottom: horizontal ? '0px' : `-${parseSize(parentStackGap)}`,
      }
    : {
        [horizontal ? 'width' : 'height']: parseSize(size),
        marginLeft: horizontal ? `-${parseSize(parentStackGap)}` : '0px',
        marginRight: horizontal ? `-${parseSize(parentStackGap)}` : '0px',
        marginTop: horizontal ? '0px' : `-${parseSize(parentStackGap)}`,
        marginBottom: horizontal ? '0px' : `-${parseSize(parentStackGap)}`,
      }

  return <div style={styles} className="flex-shrink-0" />
}

export default Spacer
