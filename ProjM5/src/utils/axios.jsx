import axios from 'axios'
import React from "react";

const api = axios.create({
  baseURL: "https://morning-scrubland-18153.herokuapp.com/",
});

export default api;