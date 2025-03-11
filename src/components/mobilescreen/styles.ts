import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    align-items: center;
    justify-content: space-between;
    color: #1C1C1C;
    margin-bottom: 20px;

    > div {
        display: flex;
    }
`;

export const Table = styled.table`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: auto; /* Centraliza a tabela na tela */
`;

export const THead = styled.thead`
    background-color: ${({ theme }) => theme.colors.bluePrimary};
    width: 100%;
`;

export const TBody = styled.tbody`
    background-color: ${({ theme }) => theme.colors.white};
`;

export const TR = styled.tr`
    width: 100%;
`;

export const TH = styled.th`
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 12px; /* Adiciona espaçamento interno */
`;

export const TD = styled.td`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: 12px; /* Adiciona espaçamento interno 
    box-shadow: inset 0 -3px 5px rgba(0, 0, 0, 0.5); 
    align-items: center; /* Alinha o conteúdo verticalmente */
    text-align: left;
`;

export const Image = styled.img`
    border-radius: 50%; /* Faz a imagem ficar redonda */
    width: 50px; /* Define a largura da imagem */
    height: 50px; /* Define a altura da imagem */
    margin-right: 10px; /* Espaço entre a imagem e o nome */
`;

export const Button = styled.button`
   background: none; /* Remove o fundo do botão */
    border: none; /* Remove a borda do botão */
    color: ${({ theme }) => theme.colors.bluePrimary}; /* Define a cor da seta */
    cursor: pointer; /* Muda o cursor para indicar que é clicável */
    padding: 0; /* Remove o espaçamento interno do botão */
`;

