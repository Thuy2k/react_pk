import { types } from './constants';

const initialState = {
    isViewModalVisible: false,
    isAddModalVisible: false,
    isEditModalVisible: false,
    isDeleteModalVisible: false,
    isAssignModalVisible: false,
    isUnassignModalVisible: false,
};
  
export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_VIEW_MODAL_VISIBLE:
            return {
                ...state,
                isViewModalVisible: action.payload,
            };
        case types.SET_ADD_MODAL_VISIBLE:
            return {
                ...state,
                isAddModalVisible: action.payload,
            };
        case types.SET_EDIT_MODAL_VISIBLE:
            return {
                ...state,
                isEditModalVisible: action.payload,
            };
        case types.SET_DELETE_MODAL_VISIBLE:
            return {
                ...state,
                isDeleteModalVisible: action.payload,
            };
        case types.SET_ASSIGN_MODAL_VISIBLE:
            return {
                ...state,
                isAssignModalVisible: action.payload,
            };
        case types.SET_UNASSIGN_MODAL_VISIBLE:
            return {
                ...state,
                isUnassignModalVisible: action.payload,
            };
        case types.SET_REFETCH_SUCCESS:
            return {
                ...state,
                isRefetchSuccess: action.payload,
            };
        default:
            return state;
    }
};