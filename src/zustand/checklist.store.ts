import getChecklist from '@/model/getChecklist.model'
import { ChecklistStageTypes } from '@/types/ChecklistStages.type'

import { create } from 'zustand'

interface CheckListStoreProps {
  stage: ChecklistStageTypes
  setStage: (stage: ChecklistStageTypes) => void

  checkList: getChecklist[] | []
  setCheckList: (checkList: getChecklist[]) => void
}

const useCheckListStore = create<CheckListStoreProps>((set) => ({
  stage: 'list',
  setStage: (stage: ChecklistStageTypes) => set({ stage }),

  checkList: [],
  setCheckList: (checkList: getChecklist[]) => set({ checkList }),
}))

export default useCheckListStore
