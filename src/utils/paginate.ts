export function paginate<T>(data: T[], page: number, limit: number): T[] {
    const startIndex = (page - 1) * limit; // Calcula el índice de inicio
    const endIndex = startIndex + limit;   // Calcula el índice de fin
    return data.slice(startIndex, endIndex); // Devuelve los elementos de la página
  }