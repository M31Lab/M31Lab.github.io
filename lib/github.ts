export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
}

export interface GithubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface Contributor extends GithubUser {
  contributions: number;
  role?: string;
}

export async function getRepositories(org: string): Promise<Repository[]> {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${org}/repos?sort=updated&per_page=100`,
      { next: { revalidate: 3600 } }
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error("Failed to fetch repositories:", error);
    return [];
  }
}

export async function getUser(username: string): Promise<GithubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    return null;
  }
}

export async function getContributors(org: string): Promise<Contributor[]> {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${org}/members`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const members = await response.json();
    const contributors: Contributor[] = await Promise.all(
      members.map(async (member: any) => {
        const userData = await getUser(member.login);
        return {
          ...userData,
          contributions: Math.floor(Math.random() * 500) + 50, // Example contribution count
          role: getContributorRole(member.login),
        };
      })
    );

    return contributors;
  } catch (error) {
    console.error("Failed to fetch contributors:", error);
    return [];
  }
}

function getContributorRole(username: string): string {
  const roles: Record<string, string> = {
    eshanized: "Founder & Lead Developer",
    // Add more roles as needed
  };
  return roles[username] || "Contributor";
}