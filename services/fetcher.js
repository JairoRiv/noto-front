import axios from "axios";

//Create fetcher function
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetcher;
