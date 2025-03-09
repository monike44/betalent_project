import { useState } from "react";
import * as S from "./styles";



interface SearchBarProps {
  value: string;
  onSearch: (searchTerm: string, filters: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value ,onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(value);




  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value, []);
  };

  return (
      <S.SearchInput
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleSearchChange}
      />
  );
};

export default SearchBar;
