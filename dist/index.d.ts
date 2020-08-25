declare namespace BigParser {
    function search(queryObj: QueryObject, gridId: string, viewId?: string): Promise<APIResponse>;
    function insert(insertObj: InsertObject, gridId: string, viewId?: string): Promise<APIResponse>;
    function updateByQuery(queryUpdateObj: QueryUpdateObject, gridId: string, viewId?: string): Promise<APIResponse>;
    function getHeaders(gridId: string, viewId?: string): Promise<APIResponse>;
}
export default BigParser;
