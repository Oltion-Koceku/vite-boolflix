	
import { reactive } from 'vue'

export const store = reactive({
  urlApiMovie:"https://api.themoviedb.org/3/search/movie",
  urlApiTv:"https://api.themoviedb.org/3/search/tv",
  urlApiActors:"https://api.themoviedb.org/3/movie/",
  api_key :"a50ca3005badeb852c0271093f3db1e5",
  filmBoolean: false,
  tvBoolean: false,
  cardArray:[],
  cardArrayTv:[],
  urlImg:"https://image.tmdb.org/t/p/w185",
  query: "",
  language:"it"
})