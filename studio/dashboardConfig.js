export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615b05cc1879f6175dda3e7f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nfg5p59h',
                  apiId: '7df1911d-43af-418e-8b25-8e1c819546b0'
                },
                {
                  buildHookId: '615b05cc5d875219a2d06aff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5rodb73b',
                  apiId: 'fa5d3619-3c5d-432f-86a0-2ad72faef89d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guitarhero17/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5rodb73b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
