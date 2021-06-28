import { getGroupList } from "../api/api";

const getGroup = (options) => {
    const { sessionId } = options;

    getGroupList(sessionId).then(
        (response) => {
            console.log(response.data.group);
        }
    )
}

export default getGroup;
