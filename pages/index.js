import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Link from 'next/link';
import { getAllPublished } from '../lib/notion';


export default function TesteNotion({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Um pouco sobre mim</h2>
        <p className={utilStyles.paragraphIntro}>
          Olá, meu nome é Raylander Guimarães, sou professor de Educação Física, formado desde 2014 com o título de licenciatura em Educação Física pelo Centro Universitário Salesiano (UniSales) e bacharel em Educação Física pelo Centro Universitário Claretiano desde 2016, trabalhei durante muito tempo na área de bacharel, atuando como professor de musculação em academias, professor de Treinamento Funcional e Personal Trainer, sendo aprovado em diversos concursos, porém os que valem ressaltar aqui são os da SEDU/ES, Prefeitura Municipal de Cariacica/ES e o mais recente o da Prefeitura Municipal de Vitória/ES (PMV/ES). Atualmente atuo como professor de Educação Física para séries iniciais na rede Estadual/ES e rede PMV/ES. O Objetivo desse blog é compartilhar algumas de minhas experiências ao longo desses anos de estudo e de atuação como profissional de Educação Física Escolar, para quem deseja estudar e se preparar para ser aprovado nos concursos públicos para professor de Educação Física nas diversas redes.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts.map((post, index) => (
            <li className={utilStyles.listItem} key={index}>
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
              <br/>
              <small className={utilStyles.lightText}>{post.date}</small>
              <p>{post.description}</p>
            </li>

          ))}
        </ul>
      </section>

    </Layout>
  )
}


export const getStaticProps = async () => {
  const data = await getAllPublished()

  return {
    props: {
      posts: data,
    },
    revalidate: 60
  }
}





