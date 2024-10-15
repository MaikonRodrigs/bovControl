import { styled, keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(100%); 
  }
  to {
    transform: translateX(0);   
  }
`

export const Container = styled.div`
  width: 100%;
  inset: 0;
  position: absolute;
  height: 100vh;
  backdrop-filter: blur(10px);

  box-shadow: var(--shadow);
  animation: ${slideIn} 0.5s ease-out forwards;
  backdrop-filter: blur(10px);
`

export const Wrapper = styled.div`
  background-color: #eeee;
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
  width: 52%;
  margin-right: 0px;
  bottom: 0;
  top: 0;
  right: 0;
  position: absolute;
`
export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  margin: 0 12px;
`

export const WrapperText = styled.div`
  margin-left: 2px;
  margin-bottom: 2px;
`

export const MapWrapper = styled.div`
  width: 100%;
  height: 53%;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: var(--shadow);
`
