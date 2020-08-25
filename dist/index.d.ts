declare type BigParserRow = any;
declare type BigParserRows = Array<BigParserRow>;
declare interface BigParserData {
    rows: BigParserRows;
}
declare interface AxiosResponse {
    data: {
        [name: string]: any;
    };
    status: number;
    statusText: string;
    headers: {
        [name: string]: any;
    };
}
declare type JoinOperator = string;
declare interface GlobalFilter {
    operator?: string;
    keyword: string;
}
declare interface ColumnFilter {
    column: string;
    operator?: string;
    keyword: string;
}
declare interface Filter<T> {
    filters: Array<T>;
    filtersJoinOperator?: JoinOperator;
}
declare interface InsertObject {
    insert: BigParserData;
}
declare interface QueryObject {
    query: {
        globalFilter?: Filter<GlobalFilter>;
        columnFilter?: Filter<ColumnFilter>;
        globalColumnFilterJoinOperator?: JoinOperator;
        selectColumnNames?: Array<string>;
        sort?: {
            [name: string]: string;
        };
        pagination?: {
            startRow: number;
            rowCount: number;
        };
        sendRowIdsInResponse?: boolean;
        showColumnNamesInResponse?: boolean;
    };
}
declare interface QueryUpdateObject extends QueryObject {
    update: {
        columns: BigParserRow;
    };
}
declare namespace BigParser {
    function loggedIn(): boolean;
    function login(): Promise<string>;
    function search(gridId: string, queryObj: QueryObject, viewId?: string): Promise<AxiosResponse>;
    function insert(gridId: string, insertObj: InsertObject, viewId?: string): Promise<AxiosResponse>;
    function updateByQuery(gridId: string, queryUpdateObj: QueryUpdateObject, viewId?: string): Promise<AxiosResponse>;
    function getHeaders(gridId: string, viewId: string): Promise<AxiosResponse>;
}
export default BigParser
