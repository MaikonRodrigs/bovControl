import styled, { keyframes } from 'styled-components'

const BounceAnimation = keyframes`
  0% { margin-bottom: 0}
  50% { margin-bottom: 10px}
  100% { margin-bottom: 0}
`

export const Container = styled.div`
  display: flex;
  width: 100;
  z-index: 999;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
`
export const Wrapper = styled.div`
  position: absolute;
  backdrop-filter: blur(20px);
  width: 100%;
  height: 100vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Dot = styled.div<{ delay: string }>`
  background-color: #000;
  box-shadow: var(--shadow);
  border-radius: 50%;
  width: 9px;
  height: 9px;
  margin: 0 2.5px;
  animation: ${BounceAnimation} 0.3s linear infinite;
  animation-delay: ${({ delay }) => `${delay}`};
`
