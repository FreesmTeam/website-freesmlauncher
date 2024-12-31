import { GithubReleaseType } from "@/types/GithubRelease.type";
import axios from "axios";

async function getRelease(): Promise<GithubReleaseType> {
    const release: GithubReleaseType = await axios.get('https://api.github.com/repos/freesmteam/freesmlauncher/releases/latest');
    
    return release;
}