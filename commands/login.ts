import { postLogin, setSessionId } from "../api/api"

const login = (options) => {
  postLogin(options.args[0]).then(
    (response) => {
      console.log("Logged In")
      setSessionId(response.headers.session)
    }
  )
}

export default login;
