import styled from 'styled-components'

interface TextProps {
  color: string
}

export const Container = styled.div`
  height: auto;
  width: auto;
`
export const Text = styled.h2<TextProps>`
  color: var(--${({ color }) => color});
`
