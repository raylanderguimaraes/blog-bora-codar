
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import HeaderMenu from './HeaderMenu';
import Analytics from './Anlatytics';
import Script from 'next/script';


const name = "Dicas para Concurso Educação Física";
export const siteTitle = "Dicas Concursos Educação Física";


export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2354242354081236"
                    crossorigin="anonymous"></script> */}
                <Script
                    id="Adsense-id"
                    data-ad-client="ca-pub-2354242354081236"
                    async="true"
                    strategy="beforeInteractive"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    onError={(error) => { console.error('Script failed to load', error) }}
                />

                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />

                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="google-site-verification" content="unsrrrGt9IHb_29SXV5BIe-mqqbrCH_8_EQnD3fWfMU" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

            </Head>

            <Analytics />

            <HeaderMenu />

            <header className={styles.header}>
                {home ? (
                    <>

                        <Image
                            priority
                            src="/images/imagem-perfil.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""

                        />
                        <h1 className={utilStyles.headingX1}>{name}</h1>
                    </>



                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/images/imagem-perfil.jpg"
                                className={utilStyles.borderCircle}
                                height={108}
                                width={108}
                                alt=""
                            />
                        </Link>

                        <h2 className={utilStyles.headingX1}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>

                    </>
                )}
            </header>

            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">Voltar para Home</Link>
                </div>
            )}
        </div>
    )
}