import { postAuth } from "../api/api"

const auth = (options) => {
    console.log(options.args);
    postAuth(options.args[0], options.args[1])
    .then(
        (response) => {
            console.log("Auth OK")
            console.info(response.headers.session)
        }
    )
}

export default auth;
