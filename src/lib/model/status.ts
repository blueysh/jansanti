export interface Status {
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
    listening_to_spotify: boolean;
    kv: any;
    spotify: {
        track_id: string;
        timestamps: {
            start: number;
            end: number;
        },
        song: string;
        artist: string;
        album_art_url: string;
        album: string;
    },
    discord_user: {
        id: string;
        username: string;
        public_flags: number;
        discriminator: string;
        avatar: string;
    },
    discord_status: string;
}