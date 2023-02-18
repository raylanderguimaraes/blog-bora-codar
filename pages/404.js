import Link from 'next/link';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export default function Custon404() {

    // Trabalhar numa página customizada para quando cair numa rota que não existe ou não foi encontrada.
    return (
        <Layout>
            <h1>404 - Page Not Found</h1>
            <p>Desculpe, mas essa página não existe ou não foi encontrada, clique no link abaixo para voltar a Home.</p>
        </Layout>
    )
}