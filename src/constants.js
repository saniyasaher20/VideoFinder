export const GOOGLE_AUTH_KEY = "AIzaSyALHqw0YgPY14sdqU2grO01i6WKlWQDCis";


// export const VIDEOS_API = "https://youtube138.p.rapidapi.com/video/details/?id=kJQP7kiw5Fk&hl=en&gl=US"

export const VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=" + GOOGLE_AUTH_KEY;
// export const CHANNELS_API = "https://youtube.googleapis.com/youtube/v3/channels&maxResults=50&id="+ channelId +"&?key=" + GOOGLE_AUTH_KEY;
export const SEARCH_QUERY_API = "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q="
export const VIDEO_CATEGORIES_API = "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + GOOGLE_AUTH_KEY;

export const List = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + GOOGLE_AUTH_KEY

