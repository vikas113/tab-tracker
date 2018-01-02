import Api from '@/services/api'

export default {
  register (credentials) {
    Api().post('register', credentials)
  }
}
