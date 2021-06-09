import axios from 'axios';


const KEY = 'AIzaSyDXfbhJ6mODvOp5IpNvZxpQ2j8jBqoSIog'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }

});
