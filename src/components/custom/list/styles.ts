import styled from 'styled-components'
import { ViewList } from 'styled-icons/bootstrap'
import { DeleteDismiss } from 'styled-icons/fluentui-system-filled'

export const Container = styled.div`
  width: auto;
  height: auto;
`

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const ContainerInfos = styled.div`
  display: flex;
  justify-items: center;
  /* align-items: center; */
  flex-direction: row;
  gap: 100px;
  justify-content: space-evenly;
  padding-bottom: 1rem;
  height: auto;
  width: 100%;
`
export const Content = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const IconDelete = styled(DeleteDismiss)`
  cursor: pointer;

  &:hover {
    color: red;
    opacity: 70%;
  }
`

export const IconView = styled(ViewList)`
  cursor: pointer;
  &:hover {
    opacity: 50%;
  }
`
