
const MY_GOOGLE_API_KEY = 'AIzaSyAk1jFcy4u1LItVDPZIniVhlDm25tTFqBA';

export const YOUTUBE_VIDEOS_API ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='+MY_GOOGLE_API_KEY;

// export const YOUTUBE_SEARCH_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key='+MY_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';