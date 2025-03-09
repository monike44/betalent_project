import { useEffect, useState } from "react";
import { Employee } from "../../types/types";
import { getEmployees } from "../../services/api";
import { formatDate, formatPhone } from "../../utils/formatters";
import { ChevronDown, ChevronUp } from "lucide-react";
import FilterCheckbox from "../filters/filtercheckbox";
import SearchBar from "../searchbar/searchbar";
import * as S from "./styles";

const MobileTable = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [expandedIds, setExpandedIds] = useState<number[]>([]);
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

    const toggleExpand = (id: number) => {
        setExpandedIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((expandedId) => expandedId !== id)
                : [...prevIds, id]
        );
    };

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

    const filteredEmployees = employees.filter((employee) => {
    return (
        (filters.includes("name") && employee.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (filters.includes("phone") && formatPhone(employee.phone).includes(formatPhone(searchQuery))) || 
        (filters.includes("job") && employee.job.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (filters.length === 0 && employee.name.toLowerCase().includes(searchQuery.toLowerCase())) 
    );
});


    return (
        <div>
            <h2 style={{ textAlign: "left", color: "#1C1C1C", fontSize: "1.5rem" }}>Funcionários</h2>
            <S.SearchContainer>
                <SearchBar value={searchQuery} onSearch={handleSearch} />
                <div>
                    <FilterCheckbox label="Nome" isChecked={filters.includes("name")} onChange={() => handleFilterChange("name")} />
                    <FilterCheckbox label="Telefone" isChecked={filters.includes("phone")} onChange={() => handleFilterChange("phone")} />
                    <FilterCheckbox label="Cargo" isChecked={filters.includes("job")} onChange={() => handleFilterChange("job")} />
                </div>
            </S.SearchContainer>

            <S.Table>
                <S.THead>
                    <S.TR>
                        <S.TH>Foto</S.TH>
                        <S.TH>Nome</S.TH>
                        <S.TH></S.TH>
                    </S.TR>
                </S.THead>
                <tbody>
                    {filteredEmployees.map((employee) => (
                        <>
                            <S.TR key={employee.id}>
                                <S.TD><S.Image src={employee.image} alt={employee.name} width={50} /></S.TD>
                                <S.TD>{employee.name}</S.TD>
                                <S.TD>
                                    <S.Button onClick={() => toggleExpand(employee.id)}>
                                        {expandedIds.includes(employee.id) ? <ChevronUp /> : <ChevronDown />}
                                    </S.Button>
                                </S.TD>
                            </S.TR>
                            {expandedIds.includes(employee.id) && (
                                <S.TR>
                                    <S.TD colSpan={3}>
                                        <p><strong>Cargo:</strong> {employee.job}</p>
                                        <p><strong>Data de Admissão:</strong> {formatDate(employee.admission_date)}</p>
                                        <p><strong>Telefone:</strong> {formatPhone(employee.phone)}</p>
                                    </S.TD>
                                </S.TR>
                            )}
                        </>
                    ))}
                </tbody>
            </S.Table>
        </div>
    );
};

export default MobileTable;
