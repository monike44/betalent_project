// SearchBarStyles.ts
import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 216px; /* Largura especificada */
    height: 10px; /* Altura especificada */
`;

export const SearchInput = styled.input`
    width: 90%;
    height: 100%;
    padding: 12px 16px; 
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: ${({ theme }) => theme.colors.grayLight};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    outline: none; 
    color: #1C1C1C;

    &:focus {
        border-color: ${({ theme }) => theme.colors.bluePrimary}; 
    }

    /* Ajustando a largura para telas menores */
    @media (min-width: 768px) {
        width: 38%;
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`;

