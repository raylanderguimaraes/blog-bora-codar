import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import Link from "next/link";
import { getAllPublished } from "../lib/notion";

export default function TesteNotion({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Um pouco sobre mim</h2>
        <p className={utilStyles.paragraphContent}>
         Olá, meu nome é Raylander Guimarães, sou desenvolvedor Frontend, atualmente me encontro estudando desenvolvimento web full-stack e desenvolvimento mobile, pretendo futuramente me especializar em desenvolvimento mobile nativo android, porém já tive contato com desenvolvimento híbrido a partir do ReactNative. Sou graduando em Análise e Desenvolvimento de Sistemas atualmente no 5º período, criei esse blog pra compartilhar minha jornada e minhas experiências durante esse processo, tenho também um canal no YouTube que pode ser acessado pelo link: <a href='https://www.youtube.com/@raylanderguimaraes6059' target='_blank'>Raylander Guimarães</a> espero que curtam.
         Conecte-se comigo também nas redes sociais: <a href='https://www.linkedin.com/in/raylander-guimar%C3%A3es-ramos-3ab363222/' target='_blank'>Linkedin</a> | <a href='https://www.instagram.com/ray_prog/' target='_blank'>Instagram</a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map((post, index) => (
            <li className={utilStyles.listItem} key={index}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              <br />
              <small className={utilStyles.lightText}>{post.date}</small>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};
