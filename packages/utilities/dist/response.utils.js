"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OK = "Ok";
const NOT_FOUND = "Not Found";
const BAD_RESPONSE = "Bad Response";
exports.allGood = (res, payload = OK) => {
    res.statusCode = 200;
    res.end(payload);
};
exports.whoops = (res, payload = NOT_FOUND, code = 404) => {
    res.statusCode = code;
    res.end(payload);
};
//# sourceMappingURL=response.utils.js.map