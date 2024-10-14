import CheckList from '@/lib/Api/Clients/external/CheckList'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const checklist = new CheckList()

  try {
    const { id } = req.query
    const body = req.body
    const data = await checklist.updateCheckList(Number(id), body)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error', err })
  }
}
