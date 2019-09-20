/**
 * Created by montage_fz on 2019-09-20
 */
import {
    CHANGE_INPUT_VALUE,
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    INIT_LIST_ACTION,
    GET_INIT_LIST
} from './actionTypes';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value,
});
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
});
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    value: index,
});
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    value: data,
});

export const getInitListAction = () => ({
    type:GET_INIT_LIST
});
