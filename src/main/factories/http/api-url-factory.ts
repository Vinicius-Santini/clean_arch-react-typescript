import { apiKey } from "../../../apiKey"

export const makeApiUrl = (path: string, page?: number): string => page ? 
    `https://api.rawg.io/api${path}?key=${apiKey}&page=${page}` : `https://api.rawg.io/api${path}?key=${apiKey}`