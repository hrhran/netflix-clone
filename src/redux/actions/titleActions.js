import { getTitles } from './types'
import axios from 'axios'

export const fetchTitles = () => async dispatch => {
    const res = await axios.post('https://api.themoviedb.org/3/movie/popular?api_key=9ef41a02414a72762d46042135b6cf14')
    console.log(res)
    dispatch({type: getTitles, payload: res.data})
}


