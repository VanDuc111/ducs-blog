import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'VanDuc111/ducs-blog',
  },
  
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        pubDate: fields.date({
          label: 'Publication Date',
          defaultValue: { kind: 'today' },
        }),
        updatedDate: fields.date({
          label: 'Updated Date',
          validation: { isRequired: false },
        }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'src/assets',
          publicPath: '../assets/',
        }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets',
              publicPath: '../assets/',
            },
          },
        }),
      },
    }),
  },
});
