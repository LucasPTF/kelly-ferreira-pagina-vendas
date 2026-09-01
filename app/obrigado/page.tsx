import Link from "next/link";

export const metadata = {
  title: "Inscrição recebida | Workshop Mapa do Automático",
};

export default function ObrigadoPage() {
  return (
    <main className="thanks-page">
      <div className="thanks-orbit thanks-orbit-one" />
      <div className="thanks-orbit thanks-orbit-two" />
      <section className="thanks-card">
        <p className="eyebrow">Workshop Mapa do Automático</p>
        <div className="thanks-mark" aria-hidden="true">
          ✓
        </div>
        <h1>Seu próximo passo começa na sua caixa de entrada.</h1>
        <p className="thanks-lead">
          Se o pagamento foi aprovado, confira o e-mail usado na compra. As
          informações de acesso ao encontro serão encaminhadas por lá assim
          que forem liberadas.
        </p>
        <div className="thanks-steps">
          <div>
            <span>01</span>
            <p>Procure a confirmação da compra na sua caixa de entrada.</p>
          </div>
          <div>
            <span>02</span>
            <p>Confira também as abas de promoções, atualizações e spam.</p>
          </div>
          <div>
            <span>03</span>
            <p>Guarde os dados de acesso quando receber as orientações.</p>
          </div>
        </div>
        <p className="thanks-note">
          A data, o horário e o canal de suporte ainda serão informados pela
          organização do workshop.
        </p>
        <Link className="text-link" href="/a1">
          Voltar para a página do workshop
        </Link>
      </section>
    </main>
  );
}
