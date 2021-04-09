const createPages = require('./src/create-pages');
const { onCreateNode, shouldOnCreateNode } = require('./src/on-create-node');

const pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        slugPrefix: Joi.string().empty('').default('/blog'),
        sourceInstanceName: Joi.string().required(),
        blogListTemplate: Joi.string().required(),
        blogPostTemplate: Joi.string().required()
    })
};


module.exports = {
    createPages,
    onCreateNode,
    pluginOptionsSchema,
    unstable_shouldOnCreateNode: shouldOnCreateNode
}
