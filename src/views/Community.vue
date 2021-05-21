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
        <v-hover v-slot="{ hover }">
          <v-card flat dark color="rgba(0, 0, 0, 0.16)" class="pt-0 mx-1">
            <v-card-title class="white--text text-h5-1">
              {{ project.title }}
            </v-card-title>
            <v-card-text class="text-white text-caption-2">
              {{ project.description }}
            </v-card-text>
            <v-card-actions v-if="!$vuetify.breakpoint.lgAndUp || hover" class="d-flex">
              <div class="mx-2">
                <v-icon small class="mr-1"> mdi-chat </v-icon>
                <span class="text-caption">{{ project.comments }}</span>
              </div>
              <div class="mx-2">
                <v-icon small class="mr-1"> mdi-heart </v-icon>
                <span class="text-caption">{{ project.heart }}</span>
              </div>
              <v-spacer></v-spacer>
              <div>
                <profile-avatar :user="project.user" />
              </div>
            </v-card-actions>
          </v-card>

        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Editor from '@/components/Editor.vue'
import ProfileAvatar from '@/components/layout/widget/ProfileAvatar.vue'
export default {
  name: 'ViewCommunity',

  components: {
    Editor,
    ProfileAvatar
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
