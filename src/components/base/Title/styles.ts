import styled from 'styled-components'

interface TitleProps {
  color: string
}

export const Container = styled.div`
  height: auto;
  width: auto;
`
export const Title = styled.h1<TitleProps>`
  color: var(--${({ color }) => color});
`
