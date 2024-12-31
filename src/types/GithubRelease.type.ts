export type GithubReleaseType = {
    assets: {
        browser_download_url: string;
        name: string;
    }[];
    name: string;
};