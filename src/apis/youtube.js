import axios from 'axios'

export const KEY = 'AIzaSyA6PhrbXLK0RyxuntvAhZs7Kx2kEABXw-M'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})