"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow = exports.follow = exports.requestUsers = exports.toggleFollowingInProcess = exports.toggleIsFetching = exports.setCurrentPage = exports.setTotalUsersCount = exports.setUsers = exports.unfollowSuccess = exports.followSuccess = void 0;
var api_1 = require("../api/api");
var objectHelper_1 = require("../utils/objectHelper");
var FOLLOW = 'users/FOLLOW';
var UNFOLLOW = 'usersUNFOLLOW';
var SET_USERS = 'usersSET_USERS';
var SET_CURRENT_PAGE = 'usersSET_CURRENT_PAGE';
var SET_TOTAL_USERS_COUNT = 'usersSET_TOTAL_USERS_COUNT';
var TOGGLE_IS_FETCHING = 'usersTOGGLE_IS_FETCHING';
var TOGGLE_FOLLOWING_IN_PROCESS = 'usersTOGGLE_FOLLOWING_IN_PROCESS';
var initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: [] //array of users id
};
var usersReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case FOLLOW:
            return __assign(__assign({}, state), { users: (0, objectHelper_1.updateObjectInArray)(state.users, action.userID, 'id', { followed: true }) });
        case UNFOLLOW:
            return __assign(__assign({}, state), { users: (0, objectHelper_1.updateObjectInArray)(state.users, action.userID, 'id', { followed: false }) });
        case SET_USERS:
            return __assign(__assign({}, state), { users: action.users });
        case SET_TOTAL_USERS_COUNT:
            return __assign(__assign({}, state), { totalUsersCount: action.totalCount });
        case SET_CURRENT_PAGE:
            return __assign(__assign({}, state), { currentPage: action.page });
        case TOGGLE_IS_FETCHING:
            return __assign(__assign({}, state), { isFetching: action.isFetching });
        case TOGGLE_FOLLOWING_IN_PROCESS:
            return __assign(__assign({}, state), { followingInProcess: action.isFetching ? __spreadArray(__spreadArray([], state.followingInProcess, true), [action.userID], false) :
                    state.followingInProcess.filter(function (id) { return id !== action.userID; }) });
        default:
            return state;
    }
};
var followSuccess = function (userID) { return ({ type: FOLLOW, userID: userID }); };
exports.followSuccess = followSuccess;
var unfollowSuccess = function (userID) { return ({ type: UNFOLLOW, userID: userID }); };
exports.unfollowSuccess = unfollowSuccess;
var setUsers = function (users) { return ({ type: SET_USERS, users: users }); };
exports.setUsers = setUsers;
var setTotalUsersCount = function (totalCount) { return ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount }); };
exports.setTotalUsersCount = setTotalUsersCount;
var setCurrentPage = function (page) { return ({ type: SET_CURRENT_PAGE, page: page }); };
exports.setCurrentPage = setCurrentPage;
var toggleIsFetching = function (isFetching) { return ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching }); };
exports.toggleIsFetching = toggleIsFetching;
var toggleFollowingInProcess = function (isFetching, userID) { return ({
    type: TOGGLE_FOLLOWING_IN_PROCESS,
    isFetching: isFetching,
    userID: userID
}); };
exports.toggleFollowingInProcess = toggleFollowingInProcess;
var requestUsers = function (page, pageSize) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch((0, exports.toggleIsFetching)(true));
                dispatch((0, exports.setCurrentPage)(page));
                return [4 /*yield*/, api_1.usersAPI.getUsers(page, pageSize)];
            case 1:
                data = _a.sent();
                dispatch((0, exports.toggleIsFetching)(false));
                dispatch((0, exports.setUsers)(data.items));
                dispatch((0, exports.setTotalUsersCount)(data.totalCount));
                return [2 /*return*/];
        }
    });
}); }; };
exports.requestUsers = requestUsers;
var followUnfollowFlow = function (dispatch, userID, apiMethod, actionCreator) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dispatch((0, exports.toggleFollowingInProcess)(true, userID));
                return [4 /*yield*/, apiMethod(userID)];
            case 1:
                data = _a.sent();
                if (data.resultCode === 0)
                    dispatch(actionCreator(userID));
                dispatch((0, exports.toggleFollowingInProcess)(false, userID));
                return [2 /*return*/];
        }
    });
}); };
var follow = function (userID) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        followUnfollowFlow(dispatch, userID, api_1.usersAPI.follow, exports.followSuccess);
        return [2 /*return*/];
    });
}); }; };
exports.follow = follow;
var unfollow = function (userID) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        followUnfollowFlow(dispatch, userID, api_1.usersAPI.unfollow, exports.unfollowSuccess);
        return [2 /*return*/];
    });
}); }; };
exports.unfollow = unfollow;
exports.default = usersReducer;
//# sourceMappingURL=usersReducer.js.map