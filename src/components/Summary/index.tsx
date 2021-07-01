import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import * as S from "./styles";

export const Summary = () => (
  <S.Wrapper>
    <div>
      <header>
        <p>Entradas</p>
        <img
          src={incomeImg}
          alt="icone de fundo branco, com as bordas e uma seta aprontado para cima na cor verde"
        />
      </header>
      <strong> R$1000,00</strong>
    </div>

    <div>
      <header>
        <p>Saidas</p>
        <img
          src={outcomeImg}
          alt="icone de fundo branco, com as bordas e uma seta aprontado para baixa na cor vermelha"
        />
      </header>
      <strong> - R$500,00</strong>
    </div>

    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img
          src={totalImg}
          alt="icone de $ na cor branca, com o fundo transparente. "
        />
      </header>
      <strong> R$500,00</strong>
    </div>
  </S.Wrapper>
);
