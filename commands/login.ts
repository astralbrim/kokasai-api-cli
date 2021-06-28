import { postLogin } from "../api/api"

const login = (options) => {
  const { id } = options;
  postLogin(id).then(
    (response) => {
      console.log("Logged In")
    }
  )
}

export default login;
