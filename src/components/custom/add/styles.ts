import styled from 'styled-components'
import { CloseCircleOutline } from 'styled-icons/evaicons-outline'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const Wrapper = styled.div`
  padding: 20px;
  margin: 10px;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 12px;
`

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const WrapperText = styled.div`
  margin-left: 2px;
  margin-bottom: 2px;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  bottom: 10;
`

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  margin: 0 12px;
`

export const CloseIcon = styled(CloseCircleOutline)`
  width: 60px;
  position: absolute;
  right: 30px;
  top: 30px;
  height: 60px;
  color: var(--primary);
  margin-bottom: 140px;
  z-index: 30;
  cursor: pointer;
`
