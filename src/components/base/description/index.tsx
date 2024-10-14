import React from 'react'

import * as S from './styles'

interface DescriptionProps {
  children: React.ReactNode
  size?: string
}

const Description: React.FC<DescriptionProps> = ({
  children,
  size,
}: DescriptionProps) => {
  const sizeFormat = React.useMemo(() => {
    switch (size) {
      case 'small':
        return '14px'
      case 'think':
        return '10px'
      default:
        return '14px'
    }
  }, [size])
  return <S.Container size={sizeFormat}>{children}</S.Container>
}

export default Description
