
export const profiles = async (info) => {
    let plantilla = "";

    for (let i = 0; i < info.length; i++) {
        plantilla += /*html*/`
        <article class="contain__first">
            <img src="${info[i].avatar}" alt="img">
            <div class="text">
                <h2>${info[i].name_full}</h2>
                <p>${info[i].description}</p>
            </div>
        </article> 
        <hr> `;
    }
    return plantilla;
};
