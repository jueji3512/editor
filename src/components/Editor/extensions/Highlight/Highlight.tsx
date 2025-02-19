import Highlight from '@tiptap/extension-highlight';

const HighlightExtension = Highlight.extend({
  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => element.getAttribute('data-highlight'),
        renderHTML: (attributes) => ({
          'data-highlight': attributes.color,
          style: `background-color: ${attributes.color}`,
        }),
      },
    };
  },
});

export { HighlightExtension };
