import axiosInstance from "../utils/axios.config";
import { getSkillsFailure, getSkillsStart, getSkillsSuccess } from "./features/skillsSlice"

export const getAllSkills = async (dispatch) => {
    dispatch(getSkillsStart());
    try{
        const res = await axiosInstance.get('/skills');
        dispatch(getSkillsSuccess(res.data.skills));
    }
    catch(err){
        dispatch(getSkillsFailure());
    }
}