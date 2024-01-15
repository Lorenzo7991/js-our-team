console.log('S-JS-OK');

//* Initializing array of obj
const teamMembers = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];
//? Cheking array content
console.table(teamMembers);

const membersGrid = document.getElementById('members-grid');
//^ -----------------------------------------------------------------------------------------------
//TODO: Aggiungere commenti

for (let i = 0; i < teamMembers.length; i++) {

    const colElement = document.createElement('div');
    colElement.classList.add('col-4');
    colElement.innerHTML = `
            <h5 class="text-white text-center mt-3">${teamMembers[i].name}</h5>
            <p class="text-white text-center">${teamMembers[i].position}</p>
             `;


    membersGrid.appendChild(colElement);
}

//TODO: Finire di implementare l'inserimento dell'immagine
/* <img src="assets/img/${teamMembers[i].image}" alt="${teamMembers[i].name}">  */ 