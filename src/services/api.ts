import { Employee } from "../types/types";

// Constrói a URL usando a base do Vite, que em produção pode ser diferente de "/"
const URL = `${import.meta.env.BASE_URL}db.json`;

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await fetch(URL);
    
    if (!response.ok) {
      throw new Error("Erro ao buscar funcionários");
    }
    
    const data = await response.json();
    return data.employees;
  } catch (error) {
    console.log(error);
    return [];
  }
};
