import { getAllPeople } from "./module/app.js";
import { profiles } from "./components/profile.js";

let Search__bar = document.querySelector("#Search__bar");
let contain__general = document.querySelector(".contain__general");

addEventListener("DOMContentLoaded", async () => {
    let info = await getAllPeople();

    contain__general.innerHTML = await profiles(info);
    
    
    Search__bar.addEventListener("input", async e => {
        
        const searchEspecific = e.target.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
        
        const filteredProfiles = info.filter(person => {
            return person.name_full.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchEspecific) || person.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(searchEspecific) ; 
        });
        
            contain__general.innerHTML = await profiles(filteredProfiles);
});
})
   