import { Employee } from "../types/types";

const URL = "http://192.168.15.117:3000/employees";

export const getEmployees = async (): Promise<Employee[]> => {
    try {
        const response = await fetch(URL);
        
        if (!response.ok) throw new Error("Erro ao buscar funcionários");

        return await response.json();
    } catch (error) {
        console.log(error);
        return [];
    }
}
