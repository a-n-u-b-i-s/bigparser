// API Constants
import axios from 'axios'

const APIURL = `https://${process.env.BP_QA ? 'qa' : 'www'}.bigparser.com/api/v2`

const API = axios.create({
  baseURL: APIURL,
  headers: {
    authId: process.env.BP_AUTH
  }
})

function gridURL (action: string, gridId: string, viewId?: string): string {
  return (viewId) ? `/grid/${gridId}/share/${viewId}/${action}` : `/grid/${gridId}/${action}`
}

namespace BigParser {
  export async function search (queryObj: QueryObject, gridId: string, viewId?: string): Promise<APIResponse> {
    return await API({
      method: 'post',
      url: gridURL('search', gridId, viewId),
      data: queryObj
    })
  }
  export async function insert (insertObj: InsertObject, gridId: string, viewId?: string): Promise<APIResponse> {
    return await API({
      method: 'post',
      url: gridURL('rows/create', gridId, viewId),
      data: insertObj
    })
  }
  export async function updateByQuery (queryUpdateObj: QueryUpdateObject, gridId: string, viewId?: string): Promise<APIResponse> {
    return await API({
      method: 'put',
      url: gridURL('rows/update_by_queryObj', gridId, viewId),
      data: queryUpdateObj
    })
  }
  export async function getHeaders (gridId: string, viewId?: string): Promise<APIResponse> {
    return await API({
      method: 'get',
      url: gridURL('query_metadata', gridId, viewId)
    })
  }
}

export default BigParser
