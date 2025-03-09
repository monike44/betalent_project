export const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("pt-BR"); 
};

export const formatPhone = (phone: string): string => {

    const digits = phone.replace(/\D/g, "");

    if (digits.length >= 12) {
        const countryCode = `+${digits.slice(0, digits.length - 11)}`;
        const areaCode = digits.slice(-11, -9);
        const firstPart = digits.slice(-9, -4);
        const secondPart = digits.slice(-4);
        return `${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
    }

    return phone; 
};
