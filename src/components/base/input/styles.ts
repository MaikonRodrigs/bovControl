import styled from 'styled-components'

export const Input = styled.input`
  background-color: white;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  padding: 8px;
  color: var(--primary);
  font-size: 16px;
  &:disabled {
    opacity: 0.6;
    color: black;
    cursor: no-drop;
  }
`
