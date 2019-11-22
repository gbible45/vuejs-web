import axios from 'axios'
import JwtService from './jwt.service'
import { API_URL } from './config'

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000
})

instance.defaults.headers.post['Content-Type'] = 'application/json'

const ApiService = {
  setHeader () {
    instance.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
  },
  query (resource, params) {
    return instance
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },
  get (resource) {
    return instance
      .get(`${resource}`)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },
  post: function (resource, params) {
    return instance.post(`${resource}`, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },
  update (resource, slug, params) {
    return instance.put(`${resource}/${slug}`, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },
  put (resource, params) {
    return instance.put(`${resource}`, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },
  delete (resource) {
    return instance.delete(resource)
    .catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },
  userService: {
    access () {
      return ApiService.get('access')
    },
    login (params) {
      return ApiService.post('login', params)
    },
    logout () {
      return ApiService.post('logout')
    },
    password (params) {
      return ApiService.put('password', params)
    }
  }
}

export default ApiService

export const UserService = {
  login (params) {
    return ApiService.post('login', params)
  },
  logout () {
    return ApiService.post('logout')
  },
  password (params) {
    return ApiService.put('password', params)
  }
}

export const TagsService = {
  get () {
    return ApiService.get('tags')
  }
}

export const ArticlesService = {
  query (type, params) {
    return ApiService
        .query(
            'articles' + (type === 'feed' ? '/feed' : ''),
            { params: params }
        )
  },
  get (slug) {
    return ApiService.get('articles', slug)
  },
  create (params) {
    return ApiService.post('articles', { article: params })
  },
  update (slug, params) {
    return ApiService.update('articles', slug, { article: params })
  },
  destroy (slug) {
    return ApiService.delete(`articles/${slug}`)
  }
}

export const CommentsService = {
  get (slug) {
    if (typeof slug !== 'string') {
      throw new Error('[RWV] CommentsService.get() article slug required to fetch comments')
    }
    return ApiService.get('articles', `${slug}/comments`)
  },
  post (slug, payload) {
    return ApiService.post(`articles/${slug}/comments`, { comment: payload })
  },
  destroy (slug, commentId) {
    return ApiService
        .delete(`articles/${slug}/comments/${commentId}`)
  }
}

export const FavoriteService = {
  add (slug) {
    return ApiService.post(`articles/${slug}/favorite`)
  },
  remove (slug) {
    return ApiService.delete(`articles/${slug}/favorite`)
  }
}
