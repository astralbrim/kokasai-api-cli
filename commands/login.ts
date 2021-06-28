import { postLogin } from "../api/api"

const login = (options) => {
  const { id } = options;
  postLogin(id).then(
    (response) => {
      console.log("SUCCESS LOGGED IN!! CHECK YOUR E-MAIL👀")
    }
  )
}

export default login;
