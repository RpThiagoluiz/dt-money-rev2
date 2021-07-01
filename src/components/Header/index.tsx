import logoImg from "../../assets/logo.svg";
import * as S from "./styles";

type Props = {
  onOpen: () => void;
};

export const Header = ({ onOpen }: Props) => (
  <S.Wrapper>
    <S.Content>
      <img
        src={logoImg}
        alt="logo - bolinha na cor verde com um simbolo $ em branco"
      />
      <button type="button" onClick={onOpen}>
        Nova transacao
      </button>
    </S.Content>
  </S.Wrapper>
);
