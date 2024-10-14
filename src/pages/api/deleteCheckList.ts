// src/pages/api/checklist.ts
import CheckList from '@/lib/Api/Clients/external/CheckList'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const checklist = new CheckList()

  try {
    const { id } = req.query
    console.log(id)
    const data = await checklist.removeCheckList(Number(id))
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', err })
  }
}
