// API Constants
import axios from 'axios'

const APIURL = `https://${process.env.BP_QA ? 'qa' : 'www'}.bigparser.com/api/v2`

const API = axios.create({
  baseURL: APIURL,
  headers: {
    authId: process.env.BP_AUTH
  }
})

function gridURL (gridId: string, viewId: string, action: string): string {
  return (viewId) ? `/grid/${gridId}/share/${viewId}/${action}` : `/grid/${gridId}/${action}`
}

namespace BigParser {
  export async function search (gridId: string, viewId: string, queryObj: QueryObject): Promise<APIResponse> {
    return await API({
      method: 'post',
      url: gridURL(gridId, viewId, 'search'),
      data: queryObj
    })
  }
  export async function insert (gridId: string, viewId: string, insertObj: InsertObject): Promise<APIResponse> {
    return await API({
      method: 'post',
      url: gridURL(gridId, viewId, 'rows/create'),
      data: insertObj
    })
  }
  export async function updateByQuery (gridId: string, viewId: string, queryUpdateObj: QueryUpdateObject): Promise<APIResponse> {
    return await API({
      method: 'put',
      url: gridURL(gridId, viewId, 'rows/update_by_queryObj'),
      data: queryUpdateObj
    })
  }
  export async function getHeaders (gridId: string, viewId: string): Promise<APIResponse> {
    return await API({
      method: 'get',
      url: gridURL(gridId, viewId, 'query_metadata')
    })
  }
}

export default BigParser
