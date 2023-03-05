// export const VIDEOS_API = "https://youtube138.p.rapidapi.com/video/details/?id=kJQP7kiw5Fk&hl=en&gl=US"
// 1018
export const VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_AUTH_KEY;
// export const CHANNELS_API = "https://youtube.googleapis.com/youtube/v3/channels&maxResults=50&id="+ channelId +"&?key=" + process.env.REACT_APP_GOOGLE_AUTH_KEY;
export const SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="
export const SEARCH_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";


export const VIDEO_CATEGORIES_API = "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_AUTH_KEY;

export const List = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_AUTH_KEY

