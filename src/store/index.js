import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    editorBorderColor: '#6BD1FF',
    loggedUser: {
      id: 0,
      username: 'betogroo',
      avatar: 'https://randomuser.me/api/portraits/men/64.jpg'
    },
    users: [
      {
        id: 0,
        username: 'betogroo',
        avatar: 'https://randomuser.me/api/portraits/men/64.jpg'
      },
      {
        id: 1,
        username: 'vivi',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
      },
      {
        id: 2,
        username: 'teo',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
      },
      {
        id: 3,
        username: 'georgia',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
      },
      {
        id: 4,
        username: 'olavo',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
      },
      {
        id: 5,
        username: 'cesar',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
      {
        id: 6,
        username: 'spock',
        avatar: 'https://randomuser.me/api/portraits/men/6.jpg'
      },
      {
        id: 7,
        username: 'chesca',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg'
      },
      {
        id: 8,
        username: 'nelisa',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg'
      },
      {
        id: 9,
        username: 'sofia',
        avatar: 'https://randomuser.me/api/portraits/women/9.jpg'
      },
      {
        id: 10,
        username: 'helena',
        avatar: 'https://randomuser.me/api/portraits/women/10.jpg'
      },
      {
        id: 11,
        username: 'cirlene',
        avatar: 'https://randomuser.me/api/portraits/women/11.jpg'
      }
    ],
    projects: [
      {
        title: 'Título do Projeto 1',
        borderColor: '#7A8B23',
        description: 'Descrição do projeto',
        comments: 8,
        heart: 6,
        script: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
        `,
        user: {
          username: 'paola',
          avatar: 'https://randomuser.me/api/portraits/women/52.jpg'
        }
      },
      {
        title: 'Título do Projeto 2',
        borderColor: '#61238B',
        description: 'Descrição do projeto',
        comments: 4,
        heart: 7,
        script: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
        `,
        user: {
          username: 'hromeu',
          avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
        }
      },
      {
        title: 'Título do Projeto 3',
        borderColor: '#8B2A23',
        description: 'Descrição do projeto',
        comments: 2,
        heart: 8,
        script: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
        `,
        user: {
          username: 'linda',
          avatar: 'https://randomuser.me/api/portraits/women/16.jpg'
        }
      },
      {
        title: 'Título do Projeto 4',
        borderColor: '#238B59',
        description: 'Descrição do projeto',
        comments: 1,
        heart: 6,
        script: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
        `,
        user: {
          username: 'karthus',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      },
      {
        title: 'Título do Projeto 5',
        borderColor: '#FFFFFF',
        description: 'Descrição do projeto',
        comments: 12,
        heart: 14,
        script: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
        `,
        user: {
          username: 'vi',
          avatar: 'https://randomuser.me/api/portraits/women/47.jpg'
        }
      },
      {
        title: 'Título do Projeto 6',
        borderColor: '#BABACA',
        description: 'Descrição do projeto',
        comments: 11,
        heart: 16,
        script: `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
        `,
        user: {
          username: 'teo',
          avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
        }
      }
    ]
  },
  mutations: {
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer
    },
    CHANGE_EDITOR_BORDER_COLOR(state, payload) {
      state.editorBorderColor = payload
    }
  },
  actions: {
    toggleDrawer({ commit }) {
      commit('TOGGLE_DRAWER')
    },
    changeEditorBorderColor({ commit }, payload) {
      commit('CHANGE_EDITOR_BORDER_COLOR', payload)
    }
  },
  modules: {}
})
