const grayMatter = require('gray-matter');
const _ = require('lodash');


const shouldOnCreateNode = ({node}, {sourceInstanceName}) => {
    return (node.sourceInstanceName === sourceInstanceName && (
        node.internal.mediaType === 'text/markdown' ||
        node.internal.mediaType === 'text/x-markdown'
    ));
}

function createSlug(prefix, frontMatter) {
    if (frontMatter.slug) {
        return `${prefix}/${frontMatter.slug}`;
    }
    else {
        return `${prefix}/${frontMatter.title}`;
    }
}
const onCreateNode = async ({ node, getNode, actions, createContentDigest, createNodeId, loadNodeContent, reporter}, {slugPrefix = '/blog', sourceInstanceName}) => {
    if(!shouldOnCreateNode({ node }, { sourceInstanceName })) {
        return {};
    }
    reporter.info(`Creating BlogPost for ${node.absolutePath}`);
    const { createNode, createParentChildLink } = actions;

    const content = await loadNodeContent(node);

    try {
        const data = grayMatter(content, {excerpt: true, excerpt_separator: '<!-- end excerpt -->'});

        if (data.data) {
            data.data = _.mapValues(data.data, value => {
                if (_.isDate(value)) {
                    return value.toJSON();
                }
                return value;
            })
        }
        const blogPostNode = {
            id: createNodeId(`BlogPost${node.id}`),
            parent: node.id,
            children: [],
            author: data.data.author,
            excerpt: data.excerpt,
            publicationDate: data.data.publicationDate,
            rawMarkdownBody: data.content,
            slug: createSlug(slugPrefix, data.data),
            title: data.data.title,
            internal: {
                mediaType: node.internal.mediaType,
                type: 'BlogPost',
                content: data.content
            }
        }

        if (node.internal.type === `File`) {
            blogPostNode.fileAbsolutePath = node.absolutePath
        }

        blogPostNode.internal.contentDigest = createContentDigest(blogPostNode);

        createNode(blogPostNode);
        createParentChildLink({parent: node, child: blogPostNode});
        return blogPostNode;
    }
    catch(err) {
        reporter.panicOnBuild(
            `Error processing Markdown ${
                node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`
            }:\n
            ${err.message}`
        );

        return {};
    }

};

module.exports = {
    onCreateNode,
    shouldOnCreateNode
};