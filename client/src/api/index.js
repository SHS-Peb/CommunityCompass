import axios from "axios";

const url = "http://localhost:5001/stories";

const fetchStories = () => axios.get(url);