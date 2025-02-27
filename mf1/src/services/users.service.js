async function fetchGitHubUsers(cant) {
    const url = `https://api.github.com/users?per_page=${cant}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export default fetchGitHubUsers;