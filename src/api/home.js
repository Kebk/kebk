import axios from '@/utils/http.js'

const home = {
  getSwiper () {
    return axios.get('/home/swiper')
  }
}

export default home
