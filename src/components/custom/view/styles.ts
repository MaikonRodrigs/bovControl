import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  inset: 0;
  position: absolute;
  height: 100vh;
  backdrop-filter: blur(10px);
`

export const Wrapper = styled.div`
  box-shadow: var(--shadow);
  background-color: #f3f3f3;
  width: 52%;
  margin-right: 0px;
  bottom: 0;
  top: 0;
  right: 0;
  position: absolute;
`

export const MapWrapper = styled.div`
  width: 100%;
  height: 53%;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: var(--shadow);
`
