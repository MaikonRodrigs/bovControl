import styled from 'styled-components'

export const Container = styled.div<{ typesButton: string }>`
  width: auto;
  border-radius: 2px;
  height: 40px;
  border: 1px solid ${({ typesButton }) => typesButton};
  /* background-color: ${({ typesButton }) => typesButton}; */
  padding: 8px;
  margin: 12px 16px;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
