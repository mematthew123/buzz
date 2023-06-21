export default {
    name: 'content',
    title: 'About us',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
      },
    },
  }
  