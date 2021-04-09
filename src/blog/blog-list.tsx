import * as React from "react";

import {graphql, Link} from "gatsby";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from 'unified';

import {DefaultLayout} from "../layouts";
import * as styles from "./blog.module.scss";


export const query = graphql`{
  allBlogPost(sort: {fields: publicationDate, order: DESC}) {
    edges {
      node {
        author
        publicationDate
        slug
        title
        excerpt
      }
    }
  }
}`;

type Node = {
    author: string,
    excerpt: string,
    publicationDate: string,
    slug: string,
    title: string
};

type Edge = {
    node: Node
};

type Data = {
    data: {
        allBlogPost: {
            edges: [Edge]
        }
    }
}

const BlogPost = (blogPost: Node) => <div className={[styles.card, styles.column, styles.isOneThird].join(' ')}><Link to={blogPost.slug}>
    <div className={styles.cardContent}>
        <p className={styles.title}>{blogPost.title}</p>
        <p className={styles.subtitle}>{blogPost.author}</p>
        <div className={styles.content}>
        {
            unified()
                .use(parse)
                .use(remark2react)
                .processSync(blogPost.excerpt).contents
        }
        </div>
    </div>
</Link></div>;

export default ({data}: Data) => {
    return <DefaultLayout>
        <main className={styles.section}>
            <h1 className={styles.title}>Sports CRM Blog Posts</h1>
            <div className={styles.columns}>
                {data.allBlogPost.edges.map((blogPost, idx) => <BlogPost key={idx} {...blogPost.node}/>)}
            </div>
         </main>
    </DefaultLayout>
}