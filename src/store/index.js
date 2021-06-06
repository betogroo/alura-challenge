import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null,
    languages: [
      { name: 'Javascript', id: 1, code: 'javascript', icon: 'javascript' },
      { name: 'CSS', id: 3, code: 'css', icon: 'css3' },
      { name: 'HTML', id: 5, code: 'html', icon: 'html5' }
      // { name: 'Typescript', id: 2 },
      // { name: 'Python', id: 4 },

      // { name: 'Lua', id: 7 }
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
        language: {
          name: 'Javascript',
          id: 1,
          code: 'javascript',
          icon: 'javascript'
        },
        title: 'Projeto Novo',
        borderColor: '#7A8B23',
        description:
          'Lorem ipsum dolor sit amet, javascript, consectetur adipiscing elit. Donec vestibulum consectetur nibh, in semper magna. Vestibulum dignissim nisl id fringilla.',
        comments: 8,
        heart: [1, 3, 5],
        script: `const betogroo = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
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
        idLanguage: 3,
        language: {
          name: 'CSS',
          id: 3,
          code: 'css',
          icon: 'css3'
        },
        title: 'Título do Projeto 2',
        borderColor: '#61238B',
        description:
          'Orci varius natoque penatibus et typescript ep amagnis dis parturient.',
        comments: 4,
        heart: [5, 0],
        script: `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Página do Beto</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
        `
      },
      {
        id: 3,
        idUser: 4,
        idLanguage: 1,
        language: {
          name: 'Javascript',
          id: 1,
          code: 'javascript',
          icon: 'javascript'
        },
        title: 'Base Components',
        borderColor: '#8B2A23',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
        comments: 2,
        heart: [1],
        script: `requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/.w+$/, '')
    )
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})`
      },
      {
        id: 4,
        idUser: 3,
        idLanguage: 5,
        language: {
          name: 'HTML',
          id: 5,
          code: 'html',
          icon: 'html5'
        },
        title: 'Título do Projeto 4',
        borderColor: '#238B59',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
        comments: 1,
        heart: [1, 2, 3, 4, 5, 6],
        script: `<body>
  <b>Negrito<b/>
  <a href="link.com">Link</a>
</body>
        `
      },
      {
        id: 5,
        idUser: 5,
        idLanguage: 3,
        language: {
          name: 'CSS',
          id: 3,
          code: 'css',
          icon: 'css3'
        },
        title: 'Título do Projeto 5',
        borderColor: '#FFFFFF',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
        comments: 12,
        heart: [1, 3, 5, 6],
        script: `.colorpicker {
  height: 48px;
  padding: 6px;
  background-color: #051d3b !important;
  border: 1px solid white !important;
  border-radius: 8px !important;
}
        `
      },
      {
        id: 6,
        idUser: 7,
        idLanguage: 1,
        language: {
          name: 'Javascript',
          id: 1,
          code: 'javascript',
          icon: 'javascript'
        },
        title: 'Título do Projeto 6',
        borderColor: '#BABACA',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
        comments: 11,
        heart: [3, 5],
        script: `  mutations: {
  TOGGLE_DRAWER(state) {
    state.drawer = !state.drawer
  },
  CHANGE_EDITOR_BORDER_COLOR(state, payload) {
    state.project.borderColor = payload
  },
  ADD_PROJECT(state, payload) {
    state.projects.push(payload)
  }
}`
      },
      {
        id: 0,
        idUser: 7,
        idLanguage: 1,
        language: {
          name: 'Javascript',
          id: 1,
          code: 'javascript',
          icon: 'javascript'
        },
        title: 'Título do Projeto 6',
        borderColor: '#BABACA',
        description:
          'Lorem ipsum eleifend etiam eu ultricies vitae mauris amet ac, sit litora est faucibus rhoncus at vitae purus, quam in pulvinar rhoncus class turpis etiam cubilia. ac elit vel, nisi. ',
        comments: 11,
        heart: [1, 2, 3, 5],
        script: `actions: {
  toggleDrawer({ commit }) {
    commit('TOGGLE_DRAWER')
  },
  changeEditorBorderColor({ commit }, payload) {
    commit('CHANGE_EDITOR_BORDER_COLOR', payload)
  },
}`
      }
    ]
  },
  mutations: {
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer
    },
    CHANGE_EDITOR_BORDER_COLOR(state, payload) {
      state.project.borderColor = payload
    },
    ADD_PROJECT(state, payload) {
      state.projects.push(payload)
    },
    TOGGLE_HEART(state, { project, user }) {
      const idProject = state.projects.findIndex((item) => item.id === project)
      const check = state.projects[idProject].heart.findIndex(
        (item) => item === user
      )
      if (check === -1) {
        state.projects[idProject].heart.push(user)
      } else {
        state.projects[idProject].heart.splice(check, 1)
      }
    }
  },
  actions: {
    toggleDrawer({ commit }) {
      commit('TOGGLE_DRAWER')
    },
    changeEditorBorderColor({ commit }, payload) {
      commit('CHANGE_EDITOR_BORDER_COLOR', payload)
    },
    addProject({ commit }, payload) {
      return new Promise(() => {
        commit('ADD_PROJECT', payload)
      })
    },
    toggleHeart({ commit }, payload) {
      commit('TOGGLE_HEART', payload)
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
    },
    isHearted: (state, getters) => (project, user) => {
      const heart = getters.getProjectById(project).heart
      const check = heart.findIndex((item) => item === user)
      return check === -1 ? false : true
    }
  },
  modules: {}
})
