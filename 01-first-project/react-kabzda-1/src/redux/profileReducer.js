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
exports.saveProfileInfo = exports.savePhoto = exports.updateStatus = exports.getStatus = exports.getProfile = exports.saveProfileInfoSuccess = exports.savePhotoSuccess = exports.deletePost = exports.setStatus = exports.setUserProfile = exports.addPost = void 0;
var api_1 = require("../api/api");
var ADD_POST = 'profile/ADD_POST';
var SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
var SET_STATUS = 'profile/SET_STATUS';
var DELETE_POST = 'profile/DELETE_POST';
var SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
var SAVE_PROFILE_INFO_SUCCESS = 'profile/SAVE_PROFILE_INFO_SUCCESS';
var initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post', likesCount: 12 }
    ],
    profile: null,
    status: ""
};
var profileReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ADD_POST:
            return __assign(__assign({}, state), { posts: __spreadArray(__spreadArray([], state.posts, true), [{ id: state.posts.length + 1, message: action.newPostText, likesCount: 0 }], false) });
        case SET_STATUS:
            return __assign(__assign({}, state), { status: action.status });
        case SET_USER_PROFILE:
            return __assign(__assign({}, state), { profile: action.profile });
        case DELETE_POST:
            return __assign(__assign({}, state), { posts: state.posts.filter(function (p) { return p.id !== action.postID; }) });
        case SAVE_PHOTO_SUCCESS:
            return __assign(__assign({}, state), { profile: __assign(__assign({}, state.profile), { photos: action.photos }) });
        case SAVE_PROFILE_INFO_SUCCESS:
            return __assign(__assign({}, state), { profile: __assign(__assign({}, state.profile), { aboutMe: action.profileInfo.aboutMe, lookingForAJob: action.profileInfo.lookingForAJob, lookingForAJobDescription: action.profileInfo.lookingForAJobDescription }) });
        default:
            return state;
    }
};
var addPost = function (newPostText) { return ({ type: ADD_POST, newPostText: newPostText }); };
exports.addPost = addPost;
var setUserProfile = function (profile) { return ({ type: SET_USER_PROFILE, profile: profile }); };
exports.setUserProfile = setUserProfile;
var setStatus = function (status) { return ({ type: SET_STATUS, status: status }); };
exports.setStatus = setStatus;
var deletePost = function (postID) { return ({ type: DELETE_POST, postID: postID }); };
exports.deletePost = deletePost;
var savePhotoSuccess = function (photos) { return ({ type: SAVE_PHOTO_SUCCESS, photos: photos }); };
exports.savePhotoSuccess = savePhotoSuccess;
var saveProfileInfoSuccess = function (profileInfo) { return ({ type: SAVE_PROFILE_INFO_SUCCESS, profileInfo: profileInfo }); };
exports.saveProfileInfoSuccess = saveProfileInfoSuccess;
var getProfile = function (userID) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.profileAPI.getProfile(userID)];
            case 1:
                data = _a.sent();
                dispatch((0, exports.setUserProfile)(data));
                return [2 /*return*/];
        }
    });
}); }; };
exports.getProfile = getProfile;
var getStatus = function (userID) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.profileAPI.getStatus(userID)];
            case 1:
                data = _a.sent();
                dispatch((0, exports.setStatus)(data));
                return [2 /*return*/];
        }
    });
}); }; };
exports.getStatus = getStatus;
var updateStatus = function (status) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.profileAPI.updateStatus(status)];
            case 1:
                data = _a.sent();
                if (data.resultCode === 0)
                    dispatch((0, exports.setStatus)(status));
                return [2 /*return*/];
        }
    });
}); }; };
exports.updateStatus = updateStatus;
var savePhoto = function (photo) { return function (dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.profileAPI.savePhoto(photo)];
            case 1:
                data = _a.sent();
                if (data.resultCode === 0)
                    dispatch((0, exports.savePhotoSuccess)(data.data.photos));
                return [2 /*return*/];
        }
    });
}); }; };
exports.savePhoto = savePhoto;
var saveProfileInfo = function (info) { return function (dispatch, getState) { return __awaiter(void 0, void 0, void 0, function () {
    var userID, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userID = getState().auth.userID;
                return [4 /*yield*/, api_1.profileAPI.saveProfileData(info)];
            case 1:
                data = _a.sent();
                if (data.resultCode === 0)
                    dispatch((0, exports.getProfile)(userID));
                return [2 /*return*/];
        }
    });
}); }; };
exports.saveProfileInfo = saveProfileInfo;
exports.default = profileReducer;
//# sourceMappingURL=profileReducer.js.map