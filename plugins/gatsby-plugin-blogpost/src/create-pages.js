const createPages = async ({ actions, graphql, reporter }, { blogListTemplate, blogPostTemplate, slugPrefix }) => {
    const { createPage } = actions;

    const result = await graphql(`{
        allBlogPost {
            edges {
                node {
                    id
                    author
                    publicationDate
                    slug
                    title
                }
            }
        }
    }`);

    if (result.errors) {
        reporter.panicOnBuild(`Error running GraphQL query for Blog Posts.`);
        return;
    }

    if (blogListTemplate) {
        createPage({
            path: slugPrefix,
            component: blogListTemplate,
            context: {}
        });

    }
    result.data.allBlogPost.edges.forEach(({ node }) => {
        const path = node.slug;
        reporter.info(`Creating blog post page, ${path}`);
        createPage({
            path: path,
            component: blogPostTemplate,
            context: {
                id: node.id,
                slug: path
            }
        });
    });
};

module.exports = createPages;
