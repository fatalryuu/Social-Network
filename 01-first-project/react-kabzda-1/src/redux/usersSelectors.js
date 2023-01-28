"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFollowingInProcess = exports.getIsFetching = exports.getCurrentPage = exports.getTotalUsersCount = exports.getPageSize = exports.getUsers = exports.getUsersSelector = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var getUsersSelector = function (state) {
    return state.usersPage.users;
};
exports.getUsersSelector = getUsersSelector;
exports.getUsers = (0, toolkit_1.createSelector)(exports.getUsersSelector, function (users) {
    return users.filter(function (u) { return true; });
});
var getPageSize = function (state) {
    return state.usersPage.pageSize;
};
exports.getPageSize = getPageSize;
var getTotalUsersCount = function (state) {
    return state.usersPage.totalUsersCount;
};
exports.getTotalUsersCount = getTotalUsersCount;
var getCurrentPage = function (state) {
    return state.usersPage.currentPage;
};
exports.getCurrentPage = getCurrentPage;
var getIsFetching = function (state) {
    return state.usersPage.isFetching;
};
exports.getIsFetching = getIsFetching;
var getFollowingInProcess = function (state) {
    return state.usersPage.followingInProcess;
};
exports.getFollowingInProcess = getFollowingInProcess;
//# sourceMappingURL=usersSelectors.js.map