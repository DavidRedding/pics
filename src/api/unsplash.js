import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _u2soxYwIjernz7ogJlXafjkq-Sk531f0JHpVMSB7oE",
  },
});
