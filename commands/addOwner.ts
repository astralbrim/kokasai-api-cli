import { getGroupUserList, postGroupUserList } from "../api/api"

const addOwner = (options) => {
    const { groupName, sessionId, id } = options;
    let ownerList;
    let memberList;
    getGroupUserList(groupName, sessionId)
        .then(
            (response) => {
                ownerList = response.data.owner;
                memberList = response.data.member;
                if(!(ownerList.includes(id))) ownerList.push(id);
            }
        ).catch(
            (response) => {
                ownerList = [].concat(id);
                memberList = [];
            }
        ).finally(
            () => {
                postGroupUserList(groupName, {owner: ownerList, member: memberList}, sessionId).then(
                    () => {
                        console.log("POST GROUP USER SUCCEED RUN \"getGroupUserList\" ✔︎ ");
                    }
                );
            }
            
        )
}

export default addOwner;
