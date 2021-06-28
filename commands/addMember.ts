import { getGroupUserList, postGroupUserList } from "../api/api";

const addMember = (options) => {
    const { groupName, sessionId, id } = options;
    let ownerList;
    let memberList;
    getGroupUserList(groupName, sessionId)
        .then(
            (response) => {
                memberList = response.data.member;
                ownerList = response.data.owner;
                if(!(memberList.includes(id))) memberList.push(id);
            }
        )
        .catch(
            (response) => {
                memberList = [].concat(id);
                ownerList = [];
            }
        ).finally(
            () => {
                postGroupUserList(groupName, {owner: ownerList, member: memberList}, sessionId).then(() => console.log("POST GROUP USER SUCCEED RUN \"getGroupUserList\" ✔︎ "));
            }
        )
}

export default addMember;
