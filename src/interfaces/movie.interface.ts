export interface ProductionCountries {
	iso_3166_1: string;
	name: string;
}

export interface BelongsToCollection {
	backdrop_path: string;
	id: number;
	name: string;
	poster_path: string;
}

export interface ProductionCompanies {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface SpokenLanguages {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface Movie {
	poster_path: string;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number[];
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
	belongs_to_collection: BelongsToCollection;
	budget: number;
	genres: Genre[];
	homepage: string;
	imdb_id: string;
	production_companies: ProductionCompanies[];
	production_countries: ProductionCountries[];
	revenue: number;
	runtime: number;
	spoken_languages: SpokenLanguages[];
	status: string;
	tagline: string;
}

export interface Networks {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface TvSeries extends Movie {
	episode_run_time: number[];
	first_air_date: string;
	homepage: string;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	name: string;
	networks: Networks[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_name: string;
	status: string;
	type: string;
}

export interface MoviesResponse {
	dates?: { maximum: string; minimum: string };
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export interface MovieType {
	type: string;
	name: string;
}

export interface MovieSearchReq {
	query: string;
	page: number;
}
