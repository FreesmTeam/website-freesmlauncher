import { GithubReleaseType } from "@/types/Other/GithubRelease.type";
import axios from "axios";

export default async function getLatestRelease(): Promise<GithubReleaseType> {
    return await axios.get('https://api.github.com/repos/freesmteam/freesmlauncher/releases/latest');
}