import axios from 'axios';
import { GET_PROJECTS_FAILURE, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS } from '../reducers/home.reducer';

export const getProjects = () => async (dispatch) => {

    try {
        dispatch({
            type: GET_PROJECTS_REQUEST,
        })

        const { data } = await axios.get("/api/v1/project");

        dispatch(GET_PROJECTS_SUCCESS(data.projects));

    } catch (error) {
        dispatch(GET_PROJECTS_FAILURE(error));
    }

}