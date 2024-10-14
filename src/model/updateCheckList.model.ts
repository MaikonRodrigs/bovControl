interface Farmer {
  name: string
  city: string
}

interface From {
  name: string
}

interface To {
  name: string
}

interface Location {
  latitude: number
  longitude: number
}

interface Checklist {
  type: string
  amount_of_milk_produced: number
  number_of_cows_head: number
  had_supervision: boolean
  farmer: Farmer
  from: From
  to: To
  location: Location
}

export default interface UpdateCheckListModel {
  checklists: Checklist[]
}
