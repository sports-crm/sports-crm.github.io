import * as React from 'react';

import { graphql } from "gatsby";
import * as parse from "remark-parse";
import * as remark2react from "remark-react";
import unified from 'unified';

import {DefaultLayout} from "../layouts";

type BlogPostPoropeties = {
    data: {
        blogPost: {
            rawMarkdownBody: string,
            title: string
        }
    }
};

export default function BlogPost({ data }: BlogPostPoropeties) {
    const blogPost = data.blogPost;

    return <DefaultLayout>
        <main>
            <h1>{blogPost.title}</h1>
            {
                unified()
                    .use(parse)
                    .use(remark2react)
                    .processSync(blogPost.rawMarkdownBody).contents
            }
        </main>
    </DefaultLayout>
}

export const query = graphql`
    query($id: String!) {
        blogPost(id: { eq: $id }) {
            title
            rawMarkdownBody
        }
    }
`;