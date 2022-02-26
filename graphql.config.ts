module.exports = {
  projects: {
    app: {
      schema: ['./src/schema/schema.graphql'],
      documents: ['**/*.{graphql,js,ts,jsx,tsx}'],
    },
  },
};
