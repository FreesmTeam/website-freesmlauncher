import { GithubReleaseType } from "@/types/GithubRelease.type";
import axios from "axios";

export default async function getLatestRelease(): Promise<GithubReleaseType> {
    const release: GithubReleaseType = await axios.get('https://api.github.com/repos/freesmteam/freesmlauncher/releases/latest');
    
    return release;
}