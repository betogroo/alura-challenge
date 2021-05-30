export const ProjectMixin = {
  props: {
    project: {
      type: Object,
      default: () => ({
        script: '',
        borderColor: '#FFFFFF',
        title: 'Nome do seu projeto',
        description: 'Descrição do seu projeto',
        idLanguage: 1
      })
    }
  }
}
