import axios from 'axios';

const BASEURL = "https://api.nationalize.io"

const getNationality = (name: string) =>
    axios.get(`${BASEURL}?name=${name}`)


export {getNationality};