import styled from 'styled-components'

interface LabelProps {
  color: string
}

export const Container = styled.div`
  height: auto;
  width: auto;
`
export const Label = styled.span<LabelProps>`
  color: var(--${({ color }) => color});
`
