import { getGroupUserList, postGroupUserList } from "../api/api"

const addOwner = (options) => {
    const groupName = options.args[0];
    const sessionId = options.args[2];
    getGroupUserList(groupName, sessionId)
        .then(
            (response) => {
                const ownerList = response.data.owner;
                const memberList = response.data.member;
                if(ownerList.includes(options.args[1])) ownerList.push(options.args[1]);
                if(memberList.includes(options.args[1])) memberList.push(options.args[1]);
                postGroupUserList(groupName, {owner: ownerList, member: memberList}, sessionId).then(() => console.log("posted"));
            }
        )
}

export default addOwner;
