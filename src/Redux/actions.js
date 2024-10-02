import { types } from './constants';

export const setViewModalVisible = (payload) => {
    return {
        type: types.SET_VIEW_MODAL_VISIBLE,
        payload,
    };
};
export const setAddModalVisible = (payload) => {
    return {
        type: types.SET_ADD_MODAL_VISIBLE,
        payload,
    };
};
export const setEditModalVisible = (payload) => {
    return {
        type: types.SET_EDIT_MODAL_VISIBLE,
        payload,
    };
};
export const setDeleteModalVisible = (payload) => {
    return {
        type: types.SET_DELETE_MODAL_VISIBLE,
        payload,
    };
};
export const setAssignModalVisible = (payload) => {
    return {
        type: types.SET_ASSIGN_MODAL_VISIBLE,
        payload,
    };
};
export const setUnassignModalVisible = (payload) => {
    return {
        type: types.SET_UNASSIGN_MODAL_VISIBLE,
        payload,
    };
};
export const setRefetchSuccess = (payload) => {
    return {
        type: types.SET_REFETCH_SUCCESS,
        payload,
    };
};