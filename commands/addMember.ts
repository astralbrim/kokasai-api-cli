import { getGroupUserList, postGroupUserList } from "../api/api";

const addMember = (options) => {
    const { groupName, sessionId } = options;
    getGroupUserList(groupName, sessionId)
        .then(
            (response) => {
                const memberList = response.data.member;
                const ownerList = response.data.owner;
                if(memberList.includes(options.args[1])) memberList.push(options.args[1]);
                postGroupUserList(groupName, {owner: ownerList, member: memberList}, sessionId).then(() => console.log("posted"));
            }
        )
}

export default addMember;
