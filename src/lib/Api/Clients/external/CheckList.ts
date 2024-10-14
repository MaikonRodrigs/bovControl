import InternalApi from '@/lib/Logger/InternalApi'
import InternalClient from '../Internal/InternalClient'
import PostChecklistModel from '@/model/postCheckList.model'
import getChecklist from '@/model/getChecklist.model'
import UpdateCheckListModel from '@/model/updateCheckList.model'

export default class CheckList extends InternalClient {
  async getCheckList(): Promise<getChecklist | unknown> {
    try {
      const response = await this.get('/v1/checkList')
      return response.data
    } catch (error) {
      InternalApi.error({ err: JSON.stringify(error) }, 'Error /v1/checkList')
      return null
    }
  }

  async removeCheckList(id: number): Promise<getChecklist | unknown> {
    try {
      const response = await this.delete(`/v1/checkList/${id}`)
      return response.data
    } catch (error) {
      InternalApi.error({ err: JSON.stringify(error) }, 'Error /v1/checkList')
      return null
    }
  }

  async postCheckList(
    body: PostChecklistModel,
  ): Promise<getChecklist | unknown> {
    try {
      const response = await this.post(`/v1/checkList`, body)
      return response.data
    } catch (error) {
      InternalApi.error(
        { err: JSON.stringify(error) },
        'Error posting /v1/checkList',
      )
      return null
    }
  }

  async updateCheckList(
    id: number,
    body: UpdateCheckListModel,
  ): Promise<getChecklist | unknown> {
    console.log('API', body)
    try {
      const response = await this.put(`/v1/checkList/${id}`, body)
      console.log(response)
      return response.data
    } catch (error) {
      InternalApi.error(
        { err: JSON.stringify(error) },
        'Error posting /v1/checkList',
      )
      return null
    }
  }
}
