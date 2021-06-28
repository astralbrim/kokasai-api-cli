import { postAuth } from "../api/api"

const auth = (options) => {
    console.log(options.args);
    postAuth(options.args[0], options.args[1])
        .then(
            () => console.log("Auth OK")
        )
}

export default auth;
