import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import * as S from "./styles";

export const Dashboard = () => (
  <S.Wrapper>
    <Summary />
    <TransactionsTable />
  </S.Wrapper>
);
