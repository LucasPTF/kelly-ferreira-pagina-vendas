import Image from "next/image";

type Variant = "a1" | "a2" | "a3";

const checkoutUrl = "https://pay.kiwify.com.br/qts5LMH";

const heroContent: Record<
  Variant,
  { title: string; description: string; support: string; cta: string }
> = {
  a1: {
    title: "Você funciona para todo mundo. Mas quem está no comando quando é com você?",
    description:
      "No Workshop Mapa do Automático, você vai identificar um padrão emocional que se repete, entender o que o ativa e sair com uma primeira resposta consciente para testar na rotina.",
    support:
      "Um encontro prático para transformar confusão em um mapa claro: situação, sinal, interpretação, impulso, consequência e nova escolha.",
    cta: "Quero mapear meu padrão por R$ 47",
  },
  a2: {
    title: "Talvez você não precise de mais disciplina. Precise enxergar o padrão que chega antes da decisão.",
    description:
      "Em 90 minutos ao vivo, construa o mapa de um ciclo que se repete e defina uma primeira resposta consciente para testar na rotina.",
    support:
      "O Método D.O.M. ajuda você a diagnosticar a sequência, organizar o ciclo e escolher um ponto de intervenção possível.",
    cta: "Quero mapear meu padrão por R$ 47",
  },
  a3: {
    title: "Você disse sim. Mas passou o resto do dia desejando ter dito não?",
    description:
      "Descubra o ciclo de culpa, medo e resposta automática que pode estar decidindo antes de você e organize uma nova escolha possível.",
    support:
      "O limite começa antes da resposta, quando o desconforto aparece e você abandona a própria necessidade para evitar conflito.",
    cta: "Quero construir meu Mapa do Automático",
  },
};

const recognition = [
  "Você resolve problemas, cumpre responsabilidades e sustenta muita coisa, mas adia o que prometeu para si mesma.",
  "Você diz sim para evitar conflito e depois sente cansaço, irritação ou culpa.",
  "Você entende racionalmente o que deveria fazer, mas reage do mesmo jeito quando o gatilho aparece.",
  "Rotina, autocuidado e limites desandam justamente nos períodos de maior pressão.",
];

const workshopOutcomes = [
  "Escolher um ciclo específico que deseja compreender.",
  "Reconhecer o gatilho e os sinais que aparecem antes da reação.",
  "Organizar situação, interpretação, emoção, impulso e consequência.",
  "Definir uma resposta possível para testar durante os próximos sete dias.",
];

const program = [
  {
    number: "01",
    title: "O padrão antes do comportamento",
    text: "Entenda por que repetir não significa falta de capacidade e diferencie sintoma, gatilho e ciclo automático.",
  },
  {
    number: "02",
    title: "Construção do Mapa do Automático",
    text: "Aplique a sequência de situação, sinal, interpretação, impulso e consequência em uma experiência real.",
  },
  {
    number: "03",
    title: "A primeira escolha consciente",
    text: "Selecione uma resposta pequena o bastante para caber na rotina e clara o bastante para ser observada.",
  },
  {
    number: "04",
    title: "Plano de observação de sete dias",
    text: "Acompanhe o ciclo sem transformar autoconsciência em mais uma forma de cobrança.",
  },
];

const forYou = [
  "Mulheres de 30 a 50 anos com alta responsabilidade pessoal ou profissional.",
  "Empreendedoras, líderes, gestoras e profissionais liberais que se sentem funcionais por fora e sobrecarregadas por dentro.",
  "Mulheres que percebem padrões de culpa, autossabotagem, dificuldade de limites ou reações automáticas.",
  "Quem já consumiu conteúdo ou buscou ajuda, mas ainda não consegue organizar o próprio ciclo.",
];

const notForYou = [
  "Quem procura uma solução instantânea sem aplicação.",
  "Quem deseja diagnóstico clínico ou substituição de acompanhamento de saúde.",
  "Quem não está disposta a observar uma situação real e assumir participação nas próprias escolhas.",
];

const faqs = [
  {
    question: "Isso é terapia?",
    answer:
      "Não. É um workshop educacional de desenvolvimento pessoal e autoconhecimento. Ele não realiza diagnóstico clínico, não trata transtornos e não substitui psicoterapia, atendimento médico ou outro acompanhamento de saúde.",
  },
  {
    question: "E se eu já faço terapia ou já fiz outros processos?",
    answer:
      "Você pode usar o workshop como uma ferramenta de organização e observação do cotidiano. Ele não concorre com acompanhamento clínico e pode ajudar você a levar situações mais claras para profissionais habilitados.",
  },
  {
    question: "Preciso contar algo íntimo para o grupo?",
    answer:
      "Não. Você pode fazer o exercício com o nível de exposição que considerar seguro. O foco é compreender a sequência do padrão, não forçar relatos pessoais.",
  },
  {
    question: "Vou conseguir mudar um padrão em 90 minutos?",
    answer:
      "O objetivo é identificar e organizar um ciclo e definir uma primeira resposta consciente. Mudanças profundas exigem prática, contexto e, em alguns casos, acompanhamento adequado.",
  },
  {
    question: "E se minha rotina for muito corrida?",
    answer:
      "O exercício parte de situações que já acontecem na sua vida. A resposta escolhida precisa ser simples o bastante para ser testada na rotina real.",
  },
  {
    question: "O workshop serve para ansiedade ou compulsão?",
    answer:
      "Ele pode ajudar você a observar gatilhos e respostas automáticas, mas não promete tratar ansiedade, compulsões ou qualquer condição de saúde. Sintomas intensos, persistentes ou que tragam risco devem ser avaliados por profissionais de saúde qualificados.",
  },
];

function CTA({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a className={`button ${className}`} href={checkoutUrl}>
      <span>{label}</span>
      <span className="button-icon" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-description">{text}</p> : null}
    </div>
  );
}

export function SalesPage({ variant }: { variant: Variant }) {
  const hero = heroContent[variant];

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark">KF</span>
          <span>
            <strong>Kelly Ferreira</strong>
            <small>Engenharia do Comportamento Feminino</small>
          </span>
        </a>
        <a className="topbar-link" href="#participacao">
          Ver minha participação
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="hero-meta">
            Workshop ao vivo <span /> Online <span /> 90 minutos
          </p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <p className="hero-support">{hero.support}</p>
          <CTA label={hero.cta} />
          <p className="microcopy">
            Encontro ao vivo pelo Google Meet. Conteúdo educacional de
            desenvolvimento pessoal.
          </p>
        </div>

        <div className="hero-visual">
          <div className="image-frame hero-image-frame">
            <Image
              src="/images/kelly-hero.png"
              alt="Kelly Ferreira, especialista em comportamento feminino"
              fill
              priority
              sizes="(max-width: 760px) 92vw, 44vw"
              className="portrait"
            />
          </div>
          <div className="hero-signature">
            <span>com</span>
            <strong>Kelly Ferreira</strong>
          </div>
          <div className="hero-stamp" aria-label="Investimento de quarenta e sete reais">
            <small>Investimento</small>
            <strong>R$ 47</strong>
          </div>
        </div>
      </section>

      <section className="recognition section-pad">
        <div className="section-container">
          <SectionHeading
            eyebrow="Talvez você se reconheça aqui"
            title="Por fora, competente. Por dentro, alguma parte sua continua decidindo no automático."
            text="O ponto não é concluir que há algo errado com você. É descobrir qual ciclo se repete antes da decisão consciente."
          />
          <div className="recognition-grid">
            {recognition.map((item, index) => (
              <article className="recognition-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="late-section section-pad">
        <div className="section-container split-copy">
          <div className="late-title">
            <p className="eyebrow eyebrow-light">Por que a tentativa se perde</p>
            <h2>Mais força de vontade costuma chegar tarde demais.</h2>
          </div>
          <div className="late-copy">
            <p>
              A maioria das tentativas começa depois que o impulso já apareceu,
              o limite já foi atravessado ou a promessa já foi quebrada.
            </p>
            <p>
              Então você tenta corrigir o comportamento com cobrança, controle
              ou uma nova regra. Pode funcionar por alguns dias. Sem enxergar a
              sequência que vem antes, a mesma reação encontra outro caminho
              para voltar.
            </p>
            <blockquote>
              O problema não é falta de informação. É reconhecer o momento em
              que o padrão assume o comando.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="method section-pad">
        <div className="section-container">
          <SectionHeading
            eyebrow="Método D.O.M."
            title="Antes de mudar o hábito, mapeie o ciclo."
            text="Três movimentos organizam o que hoje parece confuso e mostram onde uma nova resposta pode começar."
            align="center"
          />
          <div className="method-grid">
            <article>
              <span className="method-letter">D</span>
              <p className="method-label">Diagnóstico</p>
              <h3>Veja o que aparece antes.</h3>
              <p>
                Identifique situação, sinais físicos e emocionais, pensamento
                automático e impulso antes da reação.
              </p>
            </article>
            <article>
              <span className="method-letter">O</span>
              <p className="method-label">Organização</p>
              <h3>Coloque o ciclo em ordem.</h3>
              <p>
                Entenda como interpretação, emoção, comportamento e
                consequência se alimentam.
              </p>
            </article>
            <article>
              <span className="method-letter">M</span>
              <p className="method-label">Maestria</p>
              <h3>Escolha um ponto possível.</h3>
              <p>
                Defina uma resposta pequena, consciente e repetível para testar
                na vida real.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="build-section section-pad">
        <div className="section-container build-grid">
          <div className="build-intro">
            <SectionHeading
              eyebrow="Aplicação prática"
              title="Você vai construir o seu próprio Mapa do Automático."
              text="O trabalho parte de uma situação real da sua rotina. Você não fica apenas na explicação."
            />
            <div className="result-box">
              <p className="eyebrow">Resultado imediato</p>
              <strong>
                Sair sabendo onde o ciclo começa, como ganha força e qual é o
                primeiro ponto de intervenção possível.
              </strong>
            </div>
          </div>
          <ol className="outcome-list">
            {workshopOutcomes.map((outcome, index) => (
              <li key={outcome}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{outcome}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="program section-pad">
        <div className="section-container">
          <SectionHeading
            eyebrow="Programa do encontro"
            title="Uma sequência clara para sair da reação confusa e chegar a uma escolha observável."
          />
          <div className="program-list">
            {program.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="center-cta">
            <CTA label="Quero participar do Workshop Mapa do Automático" />
          </div>
        </div>
      </section>

      <section className="fit-section section-pad">
        <div className="section-container fit-grid">
          <div className="fit-column fit-positive">
            <p className="eyebrow">Para quem é</p>
            <h2>Para mulheres que sustentam muito e querem se ouvir com mais clareza.</h2>
            <ul>
              {forYou.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="fit-column fit-negative">
            <p className="eyebrow">Para quem não é</p>
            <h3>Este encontro pede observação e aplicação real.</h3>
            <ul>
              {notForYou.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">×</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="fit-note">
              O workshop não substitui psicoterapia, atendimento médico ou
              outro acompanhamento de saúde.
            </p>
          </div>
        </div>
      </section>

      <section className="authority section-pad">
        <div className="section-container authority-grid">
          <div className="authority-visual">
            <div className="image-frame authority-image-frame">
              <Image
                src="/images/kelly-autoridade.png"
                alt="Kelly Ferreira em seu ambiente profissional"
                fill
                sizes="(max-width: 760px) 92vw, 43vw"
                className="portrait"
              />
            </div>
            <div className="authority-proof">
              <strong>+ 380</strong>
              <span>mulheres ajudadas diretamente</span>
            </div>
          </div>
          <div className="authority-copy">
            <p className="eyebrow eyebrow-light">Quem conduz</p>
            <h2>Kelly Ferreira</h2>
            <p className="authority-role">
              Especialista em Engenharia do Comportamento Feminino
            </p>
            <p>
              Kelly atua há mais de seis anos acompanhando mulheres em
              processos de transformação emocional e comportamental. Seu
              trabalho integra análise comportamental, psicanálise, PNL e
              desenvolvimento humano.
            </p>
            <p>
              Ela também viveu desafios ligados à autoestima, sobrepeso,
              ansiedade, excesso de responsabilidade e necessidade de
              aprovação. A virada veio ao perceber que saber o que fazer não
              bastava. Era preciso compreender o padrão que produzia a
              repetição.
            </p>
            <div className="authority-line">
              <span>Mais de 6 anos de atuação</span>
              <span>Abordagem aplicada ao cotidiano</span>
            </div>
          </div>
        </div>
      </section>

      <section className="offer section-pad" id="participacao">
        <div className="section-container offer-shell">
          <div className="offer-copy">
            <p className="eyebrow">Sua participação</p>
            <h2>Um encontro para enxergar com clareza o que acontece antes de você perder a escolha.</h2>
            <p>
              Você leva para o workshop uma situação real e sai com seu ciclo
              organizado e uma primeira resposta consciente para observar na
              rotina.
            </p>
            <ul>
              <li><span>Formato</span> Workshop online e ao vivo pelo Google Meet</li>
              <li><span>Duração</span> 90 minutos</li>
              <li><span>Aplicação</span> Construção guiada do Mapa do Automático</li>
            </ul>
          </div>
          <aside className="price-card">
            <p>Workshop Mapa do Automático</p>
            <span className="price-label">Investimento único</span>
            <div className="price">
              <small>R$</small>
              <strong>47</strong>
            </div>
            <CTA label="Quero mapear meu padrão" className="button-full" />
            <small className="secure-note">
              Pagamento processado em ambiente externo da Kiwify.
            </small>
          </aside>
        </div>
      </section>

      <section className="faq section-pad">
        <div className="section-container faq-grid">
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Clareza também faz parte da escolha."
            text="Veja o que o workshop propõe, os limites do encontro e como a aplicação acontece."
          />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing section-pad">
        <div className="section-container closing-inner">
          <p className="eyebrow eyebrow-light">O primeiro passo</p>
          <h2>Não é se controlar mais. É enxergar o que acontece enquanto uma escolha diferente ainda é possível.</h2>
          <p>
            Quando o ciclo deixa de ser uma sensação confusa e ganha sequência,
            você começa a trabalhar no ponto em que uma nova resposta pode
            surgir.
          </p>
          <CTA label="Quero participar por R$ 47" />
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark brand-mark-light">KF</span>
          <div>
            <strong>Kelly Ferreira</strong>
            <p>Engenharia do Comportamento Feminino</p>
          </div>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/mentorakellyferreira">Instagram</a>
          <a href="https://www.youtube.com/@analistacorporalecomportam3481">YouTube</a>
        </div>
        <p className="footer-disclaimer">
          Conteúdo educacional de desenvolvimento pessoal. Não substitui
          atendimento médico, psicológico ou outro acompanhamento de saúde.
        </p>
      </footer>
    </main>
  );
}
