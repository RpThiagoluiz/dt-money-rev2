import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
 --white-150: #f0f2f5;

  --red: #E52e4d;
  --blue: #5429cc;
  --blue-light: #6933ff;

  --text-title: #363F5F;
  --text-body: #969CB3;

  --shape: #ffffff;

  
  
}

* {
  margin: 0px;
  padding: 0px;
  outline: none; //bom deixar par questao de acessibilidade
  box-sizing: border-box;
}

html {
  // REM = 1rem = 16px - Lembrando
  //font-size:16px - base, ideal para desktop
  @media(max-width: 1080px) {
    font-size: 93.75%; //15px
  }

  @media(max-width:720px){
    font-size: 87.5%; //14px
  }
}



body {
 background: var(--white-150);
 //Somente para navegadores que utilizam o chrome, deixar a fonte mais bonitinha
 -webkit-font-smoothing: antialiased;
 // font-family: 'Poppins', sans-serif; -> por padrao os inputs, textarea e button nao importa a fonte do body
}
body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1,h2,h3,h4,h5,h6, strong {
  font-weight: 600;
}


button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

`;

export default GlobalStyle;
