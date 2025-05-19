import type { Movie } from "./movie";

export interface MovieHttpResponse {
    results: Movie[];
    total_pages: number;
}