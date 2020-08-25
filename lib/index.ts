// API Constants
import axios from 'axios'

// BigParser Types
declare type BigParserRow = any

declare type BigParserRows = Array<BigParserRow>

declare interface BigParserData {
  rows: BigParserRows
}

export declare interface APIResponse {
  data: {
    [name: string]: any,
  },
  status: number,
  statusText: string,
  headers: {
    [name: string]: any,
  },
}

declare type JoinOperator = string

declare interface GlobalFilter {
  operator?: string,
  keyword: string
}

declare interface ColumnFilter {
  column: string,
  operator?: string,
  keyword: string
}

declare interface Filter<T> {
  filters: Array<T>,
  filtersJoinOperator?: JoinOperator
}

declare interface InsertObject {
  insert: BigParserData
}

declare interface QueryObject {
  query: {
    globalFilter?: Filter<GlobalFilter>,
    columnFilter?: Filter<ColumnFilter>,
    globalColumnFilterJoinOperator?: JoinOperator,
    selectColumnNames?: Array<string>,
    sort?: {
      [name: string]: string,
    },
    pagination?: {
      startRow: number,
      rowCount: number
    },
    sendRowIdsInResponse?: boolean,
    showColumnNamesInResponse?: boolean,
  }
}

declare interface QueryUpdateObject extends QueryObject {
  update: {
    columns: BigParserRow
  }
}

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
