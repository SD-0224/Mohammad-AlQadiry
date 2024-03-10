const baseUrl = 'https://tap-web-1.herokuapp.com';

async function GetTopicsAsync(){

    const response = await fetch(`${baseUrl}/topics/list`);
    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
    
}


export {GetTopicsAsync};