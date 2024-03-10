const baseUrl = 'https://tap-web-1.herokuapp.com';

async function getTopicsAsync(){

    const response = await fetch(`${baseUrl}/topics/list`);
    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
    
}

async function getTopicByIdAsync(id){
    const response = await fetch(`${baseUrl}/topics/details/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}

export {getTopicsAsync, getTopicByIdAsync};