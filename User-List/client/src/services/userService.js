const defaultUrl = `http://localhost:3030/jsonstore/users`

export const getAll = async () => {
    try {
        const response = await fetch(defaultUrl);
        const result = await response.json();
        const data = Object.values(result);

        return data;
    }
    catch (err) {
        console.log(err);

        return [];
    }
}