module.exports = {
  content: ["./**/*.html"],
    theme: {
    extend: {
      keyframes: {
        'move-bg': {
          to: {
            backgroundPosition: '400% 0',
          },
        },
      },
      animation: {
        'move-bg': 'move-bg 16s infinite linear',
      },
    },
  },
  plugins: [],
}
