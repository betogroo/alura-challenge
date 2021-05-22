<template>
  <v-container>
    <v-row v-for="(row, i) in slicedProjects" :key="i">
      <v-col
        v-for="(project, i) in row"
        :key="`c${i}`"
        cols="12"
        :lg="row.length === 2 ? '6' : '12'"
      >
        <editor :borderColor="project.borderColor" :text="project.script" />
        <project-details :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Editor from '@/components/Editor.vue'
import ProjectDetails from '@/components/ProjectDetails.vue'
export default {
  name: 'ViewCommunity',

  components: {
    Editor,
    ProjectDetails
  },

  data: () => ({
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
  }),

  methods: {
    sliceProjects(rows) {
      let slicedProjects = []
      for (let i = 0; i < this.projects.length; i = i + rows) {
        slicedProjects.push(this.projects.slice(i, i + rows))
      }
      return slicedProjects
    }
  },

  computed: {
    slicedProjects() {
      return this.sliceProjects(2)
    }
  }
}
</script>
