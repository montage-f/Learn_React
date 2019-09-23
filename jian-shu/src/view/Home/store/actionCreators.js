/**
 * Created by MonTage_fz on 2019/9/23
 */
import axios from 'axios';
import {fromJS} from 'immutable';

export const getTopicList = () => {
    return async (dispatch) => {
        let {data} = await axios.get('/api/topicList.json');
        const action = {
            type: 'get_topic_list',
            value: fromJS(data),
        };
        dispatch(action);
    };
};

export const getList = () => {
    return async (dispatch) => {
        let {data} = await axios.get('/api/List.json');
        const action = {
            type: 'get_list',
            value: fromJS(data),
        };
        dispatch(action);
    };
};
export const getRecommendList = () => {
    return async (dispatch) => {
        let {data} = await axios.get('/api/recommendList.json');
        const action = {
            type: 'get_recommend_list',
            value: fromJS(data),
        };
        dispatch(action);
    };
};
export const getWriterList = () => {
    return async (dispatch) => {
        let {data} = await axios.get('/api/writerList.json');
        const action = {
            type: 'get_writer_list',
            value: fromJS(data),
        };
        dispatch(action);
    };
};

