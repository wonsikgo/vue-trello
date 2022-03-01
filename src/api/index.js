import axios from "axios";
import router from "@/routes";

const DOMAIN = "http://localhost:3000";
const UNAUTHRIZED = 401;
const onUnauthroized = () => {
  router.push("/login");
};

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((result) => result.data)
    .catch((result) => {
      const { status } = result.response;
      if (status === UNAUTHRIZED) return onUnauthroized();
      throw Error(result);
    });
};

export const board = {
  fetch() {
    return request("get", "/boards");
  },
};
