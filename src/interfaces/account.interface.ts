export interface User {
	avatar: { gravatar: { hash: string }; tmdb: { avatar_path: string } };
	id: number;
	include_adult: boolean;
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	username: string;
}

export interface UserFavoritesReq {
	session_id: string;
	account_id: number;
	page?: number;
	media_type?: string;
	media_id?: number;
	favorite?: boolean;
}
