export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8d6cd737b24b2f9c2c7d04',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogg-studio-g4tyywdz',
                  apiId: '63048e34-b2d6-4cad-8cd8-06206b44c5a9'
                },
                {
                  buildHookId: '5f8d6cd78154342e678f1ab8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogg-web',
                  apiId: '8b446829-bc2b-481a-b45b-e8741d471ede'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rockstarakhil/sanity-gatsby-blogg',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogg-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
