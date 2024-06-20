export const getOne = async()=>{
    const url = `https://6674179975872d0e0a950e53.mockapi.io/user/${id}`;
    const options = {
        method: 'GET',
    };
    let res = await fetch(url, options);
    let data = res.json();
    return data;
}



export const getAllPeople = async () => {

    const url = ("https://6674179975872d0e0a950e53.mockapi.io/user");
    const custom = { method: "GET" };

    let res = await fetch(url, custom);
    let data = await res.json();
    return data;
}
