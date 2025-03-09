import styled from "styled-components";

export const SearchFilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #1C1C1C;
    margin-bottom: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: space-between;
    padding: 0.1rem;

    & input {
        margin-right: 1rem;
    }
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: space-between;
    padding: 0 1rem 0 1rem;
`;

export const Table = styled.table`
    background-color: ${({ theme }) => theme.colors.white};
    width: 960px; 
    height: auto; 
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    margin:0 auto;
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
    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.lightGray};
    }
`;

export const TH = styled.th`
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 8px;
    height: 49px; 
`;

export const TD = styled.td`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    padding: 8px;
    height: 49px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;
