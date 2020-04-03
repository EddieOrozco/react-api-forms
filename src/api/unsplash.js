import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MnFnnWL-SVa7j0TTO-wNVCcNo-XQPoNXD98z3JJKmgc"
  }
});
