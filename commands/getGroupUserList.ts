import { getGroupUserList as apiGetGroupUserList } from "../api/api"

const getGroupUserList = (options) => {
    const sessionId = options.args[0];
    const groupName = options.args[1];
    apiGetGroupUserList(groupName, sessionId).then(
        (response) => {
            console.log("owner: ", response.data.owner);
            console.log("member: ", response.data.member);
        }
    )
}

export default getGroupUserList;