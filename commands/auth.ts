import { postAuth } from "../api/api"

const auth = (options) => {
    const { id, password } = options;
    postAuth(id, password)
    .then(
        (response) => {
            console.log("Auth OK")
            console.info(response.headers.session)
        }
    )
}

export default auth;
