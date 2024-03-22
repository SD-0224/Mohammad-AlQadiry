const baseUrl = 'https://tap-web-1.herokuapp.com';

export function getTopics(searchPhrase = '') {
    const url = new URL(`${baseUrl}/topics/list`);
    if (searchPhrase) {
        url.searchParams.set('phrase', searchPhrase);
    }

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`An error has occurred: ${response.status}`);
            }
            return response.json();
        });
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



