const baseUrl = 'https://tap-web-1.herokuapp.com';

export async function getTopicsAsync(searchPhrase = '') {

    const url = new URL(`${baseUrl}/topics/list`);
    if (searchPhrase) {
        url.searchParams.set('phrase', searchPhrase);
    }
    const response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();

}

export function getTopicById(id) {
    return fetch(`${baseUrl}/topics/details/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });

}



