export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6090d86d1416ddb0ca921dac',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-9ss1xx1r',
                  apiId: 'ed894d1e-401e-43c4-a641-51751a7d6e71'
                },
                {
                  buildHookId: '6090d86d7f4e92adc5d95483',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-sw22e6oh',
                  apiId: '895f98da-d4b6-490e-8cd6-2dca59d8377b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/triptych/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-sw22e6oh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
