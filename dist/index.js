"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// API Constants
var axios_1 = require("axios");
var APIBaseURL = "https://" + (process.env.DEVELOPMENT ? 'qa' : 'www') + ".bigparser.com/APIServices/api";
var APIBaseURLv2 = "https://" + (process.env.DEVELOPMENT ? 'qa' : 'www') + ".bigparser.com/api/v2";
var BigParserAPIv2 = axios_1.default.create({
    baseURL: APIBaseURLv2
});
var BigParser;
(function (BigParser) {
    var authorized = false;
    function loggedIn() {
        return authorized;
    }
    BigParser.loggedIn = loggedIn;
    function login() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (process.env.BP_AUTH) {
                    BigParserAPIv2.defaults.headers.common.authId = process.env.BP_AUTH;
                    authorized = true;
                    return [2 /*return*/, process.env.BP_AUTH];
                }
                else {
                    throw new Error("BP_AUTH is missing");
                }
                return [2 /*return*/];
            });
        });
    }
    BigParser.login = login;
    function search(gridId, queryObj, viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var gridResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BigParserAPIv2({
                            method: 'post',
                            url: (viewId) ? "/grid/" + gridId + "/share/" + viewId + "/search" : "/grid/" + gridId + "/search",
                            data: queryObj
                        })];
                    case 1:
                        gridResponse = _a.sent();
                        return [2 /*return*/, gridResponse];
                }
            });
        });
    }
    BigParser.search = search;
    function insert(gridId, insertObj, viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var gridResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BigParserAPIv2({
                            method: 'post',
                            url: (viewId) ? "/grid/" + gridId + "/share/" + viewId + "/rows/create" : "/grid/" + gridId + "/rows/create",
                            data: insertObj
                        })];
                    case 1:
                        gridResponse = _a.sent();
                        return [2 /*return*/, gridResponse];
                }
            });
        });
    }
    BigParser.insert = insert;
    function updateByQuery(gridId, queryUpdateObj, viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var gridResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BigParserAPIv2({
                            method: 'put',
                            url: (viewId) ? "/grid/" + gridId + "/share/" + viewId + "/rows/update_by_queryObj" : "/grid/" + gridId + "/rows/update_by_queryObj",
                            data: queryUpdateObj
                        })];
                    case 1:
                        gridResponse = _a.sent();
                        return [2 /*return*/, gridResponse];
                }
            });
        });
    }
    BigParser.updateByQuery = updateByQuery;
    function getHeaders(gridId, viewId) {
        return __awaiter(this, void 0, void 0, function () {
            var gridResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, BigParserAPIv2({
                            method: 'get',
                            url: (viewId) ? "/grid/" + gridId + "/share/" + viewId + "/query_metadata" : "/grid/" + gridId + "/query_metadata"
                        })];
                    case 1:
                        gridResponse = _a.sent();
                        return [2 /*return*/, gridResponse];
                }
            });
        });
    }
    BigParser.getHeaders = getHeaders;
})(BigParser || (BigParser = {}));
exports.default = BigParser;
