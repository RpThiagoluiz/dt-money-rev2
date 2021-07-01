import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  // serao 3 coloumns de tamanhos iguais, a msm coisa - grid-template-columns: 1fr 1fr 1fr
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  > div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > strong {
      // strong por padrao vem display: inline -> ele nao recebe margin top no caso.
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
