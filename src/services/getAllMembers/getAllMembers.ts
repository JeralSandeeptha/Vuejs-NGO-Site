import axios from "axios";
import { BASEURL } from "../../api/baseURL";
import type { GetAllMembersProps } from "../../types/functions.types";

const getAllMembers = async (props: GetAllMembersProps) => {
    try {
        const response = await axios.get(`${BASEURL}/members`);
        console.log(response.data);
        props.members.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

export default getAllMembers;