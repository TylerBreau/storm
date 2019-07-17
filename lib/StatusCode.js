"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["INFO_CONTINUE"] = 100] = "INFO_CONTINUE";
    StatusCode[StatusCode["INFO_SWITCHING_PROTOCOLS"] = 101] = "INFO_SWITCHING_PROTOCOLS";
    StatusCode[StatusCode["INFO_PROCESSING"] = 102] = "INFO_PROCESSING";
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["OK_CREATED"] = 201] = "OK_CREATED";
    StatusCode[StatusCode["OK_ACCEPTED"] = 202] = "OK_ACCEPTED";
    StatusCode[StatusCode["OK_NON_AUTH_INFO"] = 203] = "OK_NON_AUTH_INFO";
    StatusCode[StatusCode["OK_NO_CONTENT"] = 204] = "OK_NO_CONTENT";
    StatusCode[StatusCode["OK_RESET_CONTENT"] = 205] = "OK_RESET_CONTENT";
    StatusCode[StatusCode["OK_PARTIAL_CONTENT"] = 206] = "OK_PARTIAL_CONTENT";
    StatusCode[StatusCode["OK_MULTI_STATUS"] = 207] = "OK_MULTI_STATUS";
    StatusCode[StatusCode["OK_ALREADY_REPORTED"] = 208] = "OK_ALREADY_REPORTED";
    StatusCode[StatusCode["REDIR_MULTIPLE_CHOICE"] = 300] = "REDIR_MULTIPLE_CHOICE";
    StatusCode[StatusCode["REDIR_MOVED_PERMANENTLY"] = 301] = "REDIR_MOVED_PERMANENTLY";
    StatusCode[StatusCode["REDIR_FOUND"] = 301] = "REDIR_FOUND";
    StatusCode[StatusCode["REDIR_SEE_OTHER"] = 303] = "REDIR_SEE_OTHER";
    StatusCode[StatusCode["REDIR_NOT_MODIFIED"] = 304] = "REDIR_NOT_MODIFIED";
    StatusCode[StatusCode["REDIR_USE_PROXY"] = 305] = "REDIR_USE_PROXY";
    StatusCode[StatusCode["REDIR_TEMP"] = 307] = "REDIR_TEMP";
    StatusCode[StatusCode["ERR_BAD_REQUEST"] = 400] = "ERR_BAD_REQUEST";
    StatusCode[StatusCode["ERR_UNAUTHORIZED"] = 401] = "ERR_UNAUTHORIZED";
    StatusCode[StatusCode["ERR_PAYMENT_REQUIRED"] = 402] = "ERR_PAYMENT_REQUIRED";
    StatusCode[StatusCode["ERR_FORBIDDEN"] = 403] = "ERR_FORBIDDEN";
    StatusCode[StatusCode["ERR_NOT_FOUND"] = 404] = "ERR_NOT_FOUND";
    StatusCode[StatusCode["ERR_NOT_ALLOWED"] = 405] = "ERR_NOT_ALLOWED";
    StatusCode[StatusCode["ERR_NOT_ACCEPTABLE"] = 406] = "ERR_NOT_ACCEPTABLE";
    StatusCode[StatusCode["ERR_PROXY_AUTH_REQUIRED"] = 407] = "ERR_PROXY_AUTH_REQUIRED";
    StatusCode[StatusCode["ERR_REQUEST_TIMEOUT"] = 408] = "ERR_REQUEST_TIMEOUT";
    StatusCode[StatusCode["ERR_CONFLICT"] = 409] = "ERR_CONFLICT";
    StatusCode[StatusCode["ERR_GONE"] = 410] = "ERR_GONE";
    StatusCode[StatusCode["ERR_LENGTH_REQUIRED"] = 411] = "ERR_LENGTH_REQUIRED";
    StatusCode[StatusCode["ERR_PRECONDITION_FAILED"] = 412] = "ERR_PRECONDITION_FAILED";
    StatusCode[StatusCode["ERR_REQUEST_TOO_LARGE"] = 413] = "ERR_REQUEST_TOO_LARGE";
    StatusCode[StatusCode["ERR_REQUEST_URI_TOO_LONG"] = 414] = "ERR_REQUEST_URI_TOO_LONG";
    StatusCode[StatusCode["ERR_UNSUPPORTED_MEDIA_TYPE"] = 415] = "ERR_UNSUPPORTED_MEDIA_TYPE";
    StatusCode[StatusCode["ERR_REQUEST_RANGE_NOT_SATISFIABLE"] = 416] = "ERR_REQUEST_RANGE_NOT_SATISFIABLE";
    StatusCode[StatusCode["ERR_EXPECTATION_FAILED"] = 417] = "ERR_EXPECTATION_FAILED";
    StatusCode[StatusCode["ERR_TEAPOT"] = 418] = "ERR_TEAPOT";
    StatusCode[StatusCode["ERR_UPGRADE_REQUIRED"] = 426] = "ERR_UPGRADE_REQUIRED";
    StatusCode[StatusCode["ERR_PRECONDITION_REQUIRED"] = 428] = "ERR_PRECONDITION_REQUIRED";
    StatusCode[StatusCode["ERR_TOO_MANY_REQUESTS"] = 429] = "ERR_TOO_MANY_REQUESTS";
    StatusCode[StatusCode["ERR_REQUEST_HEADERS_TOO_LARGE"] = 431] = "ERR_REQUEST_HEADERS_TOO_LARGE";
    StatusCode[StatusCode["ERR_LEGAL"] = 451] = "ERR_LEGAL";
    StatusCode[StatusCode["INTERNAL_ERROR"] = 500] = "INTERNAL_ERROR";
    StatusCode[StatusCode["INTERNAL_NOT_IMPLEMENTED"] = 501] = "INTERNAL_NOT_IMPLEMENTED";
    StatusCode[StatusCode["INTERNAL_BAD_GATEWAY"] = 502] = "INTERNAL_BAD_GATEWAY";
    StatusCode[StatusCode["INTERNAL_SERVICE_UNAVAILABLE"] = 503] = "INTERNAL_SERVICE_UNAVAILABLE";
    StatusCode[StatusCode["INTERNAL_TIMEOUT"] = 504] = "INTERNAL_TIMEOUT";
})(StatusCode = exports.StatusCode || (exports.StatusCode = {}));
//# sourceMappingURL=StatusCode.js.map