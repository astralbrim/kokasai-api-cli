import { getGroupList } from "../api/api";

const getGroup = (options) => {
    const sessionId = options.args[0];

    getGroupList(sessionId).then(
        (response) => {
            console.log(response.data.group);
        }
    )
}

export default getGroup;
