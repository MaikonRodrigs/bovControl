import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: auto;
`
export const Label = styled.h2<{ color: string }>`
  color: var(--${({ color }) => color});
`

