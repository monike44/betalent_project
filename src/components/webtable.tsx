import { useState,useEffect } from "react";
import { Employee } from "../types/types";
import { getEmployees } from "../services/api";
import { formatDate ,formatPhone } from "../utils/formatters";
import FilterCheckbox from "./filters/filtercheckbox";
import SearchBar from "./searchbar/searchbar";
import * as S from "./styles";


const WebTable = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState<string[]>([]);


    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const employees = await getEmployees();
                setEmployees(employees);
            } catch (error) {
                console.log(error);
            }    
        };
        fetchEmployees();
    }, []);
    const handleFilterChange = (filter: string) => {
        setFilters((prevFilters) =>
            prevFilters.includes(filter)
                ? prevFilters.filter((f) => f !== filter) 
                : [...prevFilters, filter] 
        );
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const Employees = employees.filter((employee) => {
    return (
        (filters.includes("name") && employee.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (filters.includes("phone") && formatPhone(employee.phone).includes(formatPhone(searchQuery))) || 
        (filters.includes("job") && employee.job.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (filters.length === 0 && employee.name.toLowerCase().includes(searchQuery.toLowerCase())) 
    );
});



    return (
        <div>


        <S.SearchFilterContainer>

            <h2 style={{ fontSize: "34px"}}>Funcionários</h2>
            <S.SearchContainer>
                <S.FilterContainer>
                    <FilterCheckbox label="Nome" isChecked={filters.includes("name")} onChange={() => handleFilterChange("name")} />
                    <FilterCheckbox label="Telefone" isChecked={filters.includes("phone")} onChange={() => handleFilterChange("phone")} />
                    <FilterCheckbox label="Cargo" isChecked={filters.includes("job")} onChange={() => handleFilterChange("job")} />
                </S.FilterContainer>
                <SearchBar value={searchQuery} onSearch={handleSearch} />
            </S.SearchContainer>
        
        </S.SearchFilterContainer>
     

        <S.Table>
            <S.THead>
                <S.TR>
                    <S.TH>Foto</S.TH>
                    <S.TH>Nome</S.TH>
                    <S.TH>Cargo</S.TH>
                    <S.TH>Data de Admissão</S.TH>
                    <S.TH>Telefone</S.TH>
                </S.TR>
            </S.THead>
            <S.TBody>
                {Employees.map((employee) => (
                    <S.TR key={employee.id}>
                        <S.TD><S.Image src={employee.image} alt={employee.name} /></S.TD>
                        <S.TD>{employee.name}</S.TD>
                        <S.TD>{employee.job}</S.TD>
                        <S.TD>{formatDate(employee.admission_date)}</S.TD>
                        <S.TD>{formatPhone(employee.phone)}</S.TD>
                    </S.TR>
                ))}
            </S.TBody>
        </S.Table>
        </div>
    ); 
}
export default WebTable   