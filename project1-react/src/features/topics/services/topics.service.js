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


export async function getTopicByIdAsync(id) {
    const response = await fetch(`${baseUrl}/topics/details/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}


