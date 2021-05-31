import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    languages: [
      { name: 'Javascript', id: 1 },
      { name: 'Typescript', id: 2 },
      { name: 'PHP', id: 3 },
      { name: 'Python', id: 4 }
    ],
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
        id: 1,
        idUser: 0,
        idLanguage: 1,
        title: 'Projeto Novo',
        borderColor: '#7A8B23',
        description:
          'Lorem ipsum dolor sit amet, javascript, consectetur adipiscing elit. Donec vestibulum consectetur nibh, in semper magna. Vestibulum dignissim nisl id fringilla.',
        comments: 8,
        heart: 6,
        script: `
const betogroo = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
const unfold = (f, seed) => {
const go = (f, seed, acc) => {
const res = f(seed)
return res ? go(f, res[1], acc.concat([res[0]])) : acc
}
return go(f, seed, [])
}`
      },
      {
        id: 2,
        idUser: 1,
        idLanguage: 2,
        title: 'Título do Projeto 2',
        borderColor: '#61238B',
        description:
          'Orci varius natoque penatibus et typescript ep amagnis dis parturient.',
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
        `
      },
      {
        id: 3,
        idUser: 4,
        idLanguage: 1,
        title: 'Título do Projeto 3',
        borderColor: '#8B2A23',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
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
        `
      },
      {
        id: 4,
        idUser: 3,
        idLanguage: 1,
        title: 'Título do Projeto 4',
        borderColor: '#238B59',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
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
        `
      },
      {
        id: 5,
        idUser: 5,
        idLanguage: 1,
        title: 'Título do Projeto 5',
        borderColor: '#FFFFFF',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
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
        `
      },
      {
        id: 6,
        idUser: 7,
        idLanguage: 1,
        title: 'Título do Projeto 6',
        borderColor: '#BABACA',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
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
        `
      },
      {
        id: 0,
        idUser: 7,
        idLanguage: 1,
        title: 'Título do Projeto 6',
        borderColor: '#BABACA',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
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
        `
      }
    ]
  },
  mutations: {
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer
    },
    CHANGE_EDITOR_BORDER_COLOR(state, payload) {
      state.project.borderColor = payload
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
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === id)
    },
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id === id)
    },
    getLanguageByProjectId: (state) => (id) => {
      return state.languages.find((language) => language.id === id)
    }
  },
  modules: {}
})
