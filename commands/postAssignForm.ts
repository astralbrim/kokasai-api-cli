import { postFormAssign } from "../api/api";

const postAssignForm = (options) => {
    const formName = options.formName;
    const sessionId = options.sessionId;
    const groupName = options.groupName;

    postFormAssign(
        formName, groupName, sessionId
    ).then(
        () => {
            console.log("POST ASSIGNE FORM SUCEED");
        }
    )
}

export default postAssignForm;
