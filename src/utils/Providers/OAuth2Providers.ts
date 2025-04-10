"use server";

import * as arctic from "arctic";

export const GitHubProvider = async () => {
    return new arctic.GitHub(
        process.env.GITHUB_CLIENT_ID!,
        process.env.GITHUB_SECRET_KEY!,
        "https://website-freesmlauncher.vercel.app/",
    );
};