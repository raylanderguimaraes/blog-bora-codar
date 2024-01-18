import React, { useState } from "react";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Perguntas } from "../data/perguntas";
import Head from "next/head";

const pageTitle = "Teste Seus Conhecimentos";

export default function Quiz() {
  const questions = Perguntas ?? [];
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [showPontuacao, setShowPontuacao] = useState(false);
  const [pontos, setPontos] = useState(0);
  const [podeEscolher, setPodeEscolher] = useState(true);
  const [opcaoEscolhida, setOpcaoEscolhida] = useState(null);

  function proximaPergunta(correta) {
    const nextQuestion = perguntaAtual + 1;

    if (correta) {
      setPontos(pontos + 1);
    }

    if (nextQuestion < questions.length) {
      setPerguntaAtual(nextQuestion);
      setOpcaoEscolhida(null);
      setPodeEscolher(true);
    } else {
      setShowPontuacao(true);
    }
  }

  function handleEscolha(opcaoResposta) {
    if (podeEscolher) {
      setOpcaoEscolhida(opcaoResposta);
      setPodeEscolher(false);
    }
  }

  function restartQuiz() {
    window.location.reload(false);
  }

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h2 className={utilStyles.quizTitle}>Teste seus Conhecimentos</h2>

      {showPontuacao ? (
        <div className={utilStyles.quizScore}>
          <h1>
            Você acertou: {pontos} de {questions.length}{" "}
          </h1>
          <button
            className={utilStyles.quizButtonResult}
            onClick={() => restartQuiz()}>
            Responder de novo
          </button>
        </div>
      ) : (
        <>
          <span>
            Pergunta {perguntaAtual + 1}/{questions.length}
          </span>
          <p className={utilStyles.headingMd}>
            {questions[perguntaAtual].pergunta}
          </p>

          <div className={utilStyles.quizResposts}>
            {questions[perguntaAtual].opcoesResposta.map(
              (opcaoResposta, index) => (
                <div key={index}>
                  <label>
                    {opcaoResposta.alternativa}
                    <button
                      className={`${utilStyles.quizButton} ${
                        opcaoEscolhida === opcaoResposta
                          ? opcaoResposta.correta
                            ? utilStyles.quizButtonCorrectAlternative
                            : utilStyles.quizButtonIncorrectAlternative
                          : ""
                      }`}
                      onClick={() => handleEscolha(opcaoResposta)}>
                      {opcaoResposta.resposta}
                    </button>
                  </label>
                </div>
              )
            )}

            <button
              className={utilStyles.btnProx}
              onClick={() =>
                proximaPergunta(opcaoEscolhida ? opcaoEscolhida.correta : false)
              }>
              Proxima pergunta
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}
