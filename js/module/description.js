export const filtrarDicts = async (data, info) => {
    let lista = [];

    data.forEach(async dict => {
        if(dict.name_full.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(info) || dict.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(info)){
            lista.push(dict)
        };
    });
    return lista;
};