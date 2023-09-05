import ReactMarkdown from "react-markdown";
import { getAllPublished, getSingleBlogPostBySlug } from "../../lib/notion";
import Layout from "../../components/layout";
import Link from "next/link";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";



const Post = ({ post }) => {
   

  return (
    <Layout>
      <Head>
        <title>{post.metadata.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{post.metadata.title}</h1>
        <p className={utilStyles.lightText}>{post.metadata.date}</p>
        <ReactMarkdown className={utilStyles.paragraphContent}>{post.markdown}</ReactMarkdown>
      </article>
    </Layout>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;
