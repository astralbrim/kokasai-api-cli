import { postLogin } from "../api/api"

const login = (options) => {
  postLogin(options.args[0]).then(
    (response) => {
      console.log("Logged In")
    }
  )
}

export default login;
