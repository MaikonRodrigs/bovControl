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

export default interface getChecklist {
  _id: number
  type: string
  amount_of_milk_produced: string
  farmer: Farmer
  from: From
  to: To
  number_of_cows_head: string
  had_supervision: boolean
  location: Location
  created_at: string
  updated_at: string
  __v: number
}
