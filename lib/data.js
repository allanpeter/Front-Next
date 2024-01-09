
export const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:3500/users');
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
        throw new Error("failed to fetch users!")
    }
}