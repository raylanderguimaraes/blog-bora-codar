// import Head from 'next/head';
// import React from 'react';
// import Layout from "../components/layout";
// import Link from 'next/link';
// import utilStyles from '../styles/utils.module.css';
// import { getAllPublished } from '../lib/notion';

// const pageTitle = "testando"

// export default function TesteNotion({ posts }) {
//     if (!posts) return <h1>Ainda não tem Posts</h1>

//     return (
//         <Layout>
//             <Head>
//                 <title>{pageTitle}</title>
//                 <meta name="description" content="gerado por create next app" />
//             </Head>

//             <div>
//                 <h1>Blog</h1>

//                    {posts.map((post, index)=> (
//                     <section key={index}>
//                         <div>
//                             <h2>
//                                 <Link href={`/posts/${post.slug}`}>
//                                     {post.title}
//                                 </Link>
//                             </h2>
//                         </div>
//                         <div>{post.date}</div>
//                         <p>{post.description}</p>
//                     </section>

//                    ))} 

//             </div>

//         </Layout>
//     )

// }

// export const getStaticProps = async ()=>{
//     const data = await getAllPublished()

//     return {
//         props: {
//             posts: data,
//         },
//         revalidate: 60
//     }
// }