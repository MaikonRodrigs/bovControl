import styled from 'styled-components'

export const Container = styled.div<{ size: string }>`
  font-size: ${({ size }) => size};
  width: max-content;
`
