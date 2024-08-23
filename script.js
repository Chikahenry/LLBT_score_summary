let scores = JSON.parse(localStorage.getItem('scores')) || [];
let code = 0
let name = ''
//document.getElementById('scoreForm').addEventListener('submit', function(event) 
function submitForm() {
    //event.preventDefault();
    
     name = document.getElementById('participantsSelect').value;
    //  code = document.getElementById('code').value.toLowerCase();
    const score = parseInt(document.getElementById('score').value);
    if(score === null || score == 0) return
    if (isNaN(score) && name === '')  {
        alert('Please fill in all fields');
        return;
    }
    
    let existingPerson = scores.find(person => person.name === name);
    
    if (existingPerson) {
        existingPerson.score += score;
    } else {
        scores.push({ name, score });
    }

    localStorage.setItem('scores', JSON.stringify(scores));
    alert('Successful');
    //this.reset();
};

if (document.getElementById('scoreTable')) {
    const sortedScores = scores.sort((a, b) => b.score - a.score);
    const tbody = document.querySelector('#scoreTable tbody');
    
    sortedScores.forEach((person, index) => {
        const row = document.createElement('tr');
        row.className = index < 4 ? 'blue-row' : 'red-row';
        
        row.innerHTML = `
            <td>${person.name.toUpperCase()}</td>
            <td>${person.score}</td>
            `;
            // <td>${person.code.toUpperCase()}</td>
        
        tbody.appendChild(row);
    });
}

const participants = [
    { id: 1, name: 'Nworie Elijah Ifesinachi' },
    { id: 2, name: 'Orji Japhet Oluchukwu' },
    { id: 3, name: 'Pascal Prince Chizuruoke' },
    { id: 4, name: 'Sunday Ikechukwu Samuel' },
    { id: 5, name: 'Chibuzor Emmanuel Febechukwu' },
    { id: 6, name: 'Mbachu Chimeremeze Divine' },
    { id: 7, name: 'Okechukwu Ifunanya' },
    { id: 8, name: 'Asuquo Utibe-abasi' },
    { id: 9, name: 'Newton Awesome' },
    { id: 10, name: 'Effiong Treasure' },
    { id: 11, name: 'Simeon Stephanie' },
    { id: 12, name: 'Nwokeji Joshua Divine' },
    { id: 13, name: 'Nwachukwu John' },
    { id: 14, name: 'Obiukwu Chiamaka Ruth' },
    { id: 15, name: 'Obiora Destiny Chikamso' },
    { id: 16, name: 'Chinweolu Ifunanya' },
    { id: 17, name: 'Kalu Favour' },
    { id: 18, name: 'Ibekwe Moses' },
    { id: 19, name: 'Chibueze Amarachi Favour' },
    { id: 20, name: 'Christopher Obumneme Blossom' },
    { id: 21, name: 'Michael Favour Chidinma' },
    { id: 22, name: 'Ferdinard Israel Oluebube' },
    { id: 23, name: 'Samuel Daniel Chidiebube' },
    { id: 24, name: 'Michael Ebube' },
    { id: 25, name: 'Njoli Gabriel' },
    { id: 26, name: 'Ifeanyi Amarachi Precious' },
    { id: 27, name: 'Omoniyi Miracle Gift' },
    { id: 28, name: 'Ikechukwu Marvelous' },
    { id: 29, name: 'Madu Daberechi Godswill' },
    { id: 30, name: 'Chikora Blessing' },
    { id: 31, name: 'Chimezie Noble' },
    { id: 32, name: 'Monday ThankGod Igwe' },
    { id: 33, name: 'Jonathan Chukwubuikem Miracle' },
    { id: 34, name: 'Ijeoma Samuel Chiweotito' },
    { id: 35, name: 'Nweke Mmasichukwu Gift' },
    { id: 36, name: 'Ani Nkechinyere Favour' },
    { id: 37, name: 'Ekpaha Divine-Miracle' },
    { id: 38, name: 'Chidozie Victoria Uchechukwu' },
    { id: 39, name: 'Frank Ifeoma Mitchelle' },
    { id: 40, name: 'Daniel Jonathan Oche' },
    { id: 41, name: 'Chilozie Akachukwu Destiny' },
    { id: 42, name: 'Okeke Marvelous' },
    { id: 43, name: 'Uzochukwu Somtoo Esther' },
    { id: 44, name: 'Otenyi Joy' },
    { id: 45, name: 'Lincoln Marvel Mmesomma' },
    { id: 46, name: 'Edigbo Miracle' },
    { id: 47, name: 'Nwabueze Peace Nkechi' },
    { id: 48, name: 'Chiwendu Goodness Chinecherem' },
    { id: 49, name: 'Nnadi Chika Success' },
    { id: 50, name: 'Umoh Dominic Emediong' },
    { id: 51, name: 'Uchechukwu Emmanuel' },
    { id: 52, name: 'Omodiale Osose Daniel' },
    { id: 53, name: 'Anyianwu Blessed' },
    { id: 54, name: 'Ushie Dominion Ukan-Atabuchi' },
    { id: 55, name: 'Eze Samuel' },
    { id: 56, name: 'Ubani-Boyle Caleb' },
    { id: 57, name: 'Ofoma Favour Amarachi' },
    { id: 58, name: 'Okoeror David Usifoh' },
    { id: 59, name: 'Ezenwa Ifeoma' },
    { id: 60, name: 'Akumka Victor Ifeanyi' },
    { id: 61, name: 'Ibeawuchi Stella' },
    { id: 62, name: 'Kelechi Kingsley Ifeanyi' },
    { id: 63, name: 'Amadi Chisom Divine' },
    { id: 64, name: 'Paulinius Divine Chigozirim' },
    { id: 65, name: 'Francis Stella Eboseremeh' },
    { id: 66, name: 'Uzowulu Joshua A' },
    { id: 67, name: 'Chukwuka Great' },
    { id: 68, name: 'Onyeka Joseph Chidera' },
    { id: 69, name: 'Arinze Amarachi' },
    { id: 70, name: 'Felix Peace Ozioma' },
    { id: 71, name: 'Iroanya Esther Amarachi' },
    { id: 72, name: 'Okedinachi Progress Chibuisi' },
    { id: 73, name: 'Odionye Esther Chiemerie' },
    { id: 74, name: 'Oguama Victor Chimdindu' },
    { id: 75, name: 'Fidelis David Osinachi' },
    { id: 76, name: 'Okolo Uche' },
    { id: 77, name: 'Nwaigwe Divine Favour Akachukwu' },
    { id: 78, name: 'Odinaiwu Great Emmanuella Chidiebere' },
    { id: 79, name: 'Iwuala Rejoice' },
    { id: 80, name: 'Sorom Tochukwu Michael' },
    { id: 81, name: 'Elem Emmanuel Chiegonu' },
    { id: 82, name: 'Eze Blessing Onyinyechi' },
    { id: 83, name: 'Chukwurah Praise Chizaram' },
    { id: 84, name: 'Jonathan Esther Chiamaka' },
    { id: 85, name: 'Igwemma Joshua' },
    { id: 86, name: 'Ezenagu Elijah' },
    { id: 87, name: 'Chikezie Blessed Chisom' },
    { id: 88, name: 'Umukoro Favour' },
    { id: 89, name: 'Eziekwe Divinemercy' },
    { id: 90, name: 'Sabastine Favour' },
    { id: 91, name: 'Chukwuagu Oluchukwu Victoria' },
    { id: 92, name: 'Iheomaneme Divine Mmesoma' },
    { id: 93, name: 'Edeh Peculiar' },
    { id: 94, name: 'Mbidom Thank-God Chinaemerem' },
    { id: 95, name: 'Okorie Ngozi Confidence' },
    { id: 96, name: 'Opara Princess Ebubechi' },
    { id: 97, name: 'Kennedy Clinton' },
    { id: 98, name: 'Nwankwo Chinagorom Rosemary' },
    { id: 99, name: 'Finbarrs Divine' },
    { id: 100, name: 'Chukwudalu Ifunanya Prevailer' },
    { id: 101, name: 'Onyemaechi Chioma Blessing' },
    { id: 102, name: 'Precious Chinwendu Egenti' },
    { id: 103, name: 'James Emmanuel' },
    { id: 104, name: 'Chukwuere Amarachi' },
    { id: 105, name: 'Onu Faithful' },
    { id: 106, name: 'Esther John' },
    { id: 107, name: 'Ezeh Joshua' },
    { id: 108, name: 'Amadi Esther Nwenneka' },
    { id: 109, name: 'Hillary Nmesoma' },
    { id: 110, name: 'Anichukwu Blessing Chioma' },
    { id: 111, name: 'Chibueze Chibuzor Success' },
    { id: 112, name: 'Nwajichukwu Mercy' },
    { id: 113, name: 'Musa Mitchell' },
    { id: 114, name: 'Azuka Treasure Ngozichukwu' },
    { id: 115, name: 'Anioma Competent Onyedikachi' },
    { id: 116, name: 'Onyekachukwu Praise Nmesoma' },
    { id: 117, name: 'Alex Blessing Chisom' },
    { id: 118, name: 'Ike-Ibeh Esther' },
    { id: 119, name: 'Dike Chika Doris' },
    { id: 120, name: 'Nnamson Favour Chiagbanwe' },
    { id: 121, name: 'Ekwenze Ifunaya Success' },
    { id: 122, name: 'Uche Gideon Chukwuemeka' },
    { id: 123, name: 'Ugo Nancy' },
    { id: 124, name: 'Ogbuodi Wisdom Chidera' },
    { id: 125, name: 'Oluchukwu Emmanuel Chidera' },
    { id: 126, name: 'Kelechi Rejoice Onyinyechi' },
    { id: 127, name: 'Azubugwu Chibueze Caleb' },
    { id: 128, name: 'Okafor Precious' },
    { id: 129, name: 'Otobo Chiamaka Victoria' },
    { id: 130, name: 'Nnadi Princess Grace' },
    { id: 131, name: 'Azubuike Favour' },
    { id: 132, name: 'Christopher Emmanuel Chinaemerem' },
    { id: 133, name: 'Arinze Ifunanya' },
    { id: 134, name: 'Innocent Chikezie' },
    { id: 135, name: 'Eberechukwu Blossom' },
    { id: 136, name: 'Onyi Christopher Ebubechukwu' },
    { id: 137, name: 'Ilesamni Emmanuel' },
    { id: 138, name: 'Okafor Emeka Benjamin' },
    { id: 139, name: 'Okafor Favour' },
    { id: 140, name: 'Desmond Somtochukwu Joshua' },
    { id: 141, name: 'Unegbu Daniel Munachiso' },
    { id: 142, name: 'Nwedu Obinna' },
    { id: 143, name: 'Echebiri Onyinyechi' },
    { id: 144, name: 'Nweke Arinze' },
    { id: 145, name: 'Chilozie Nmerichukwuka Phoebe' },
    { id: 146, name: 'Okechukwu Miracle Onyinechi' },
    { id: 147, name: 'Ikenna Victor Chigozirim' },
    { id: 148, name: 'Ikechukwu Caleb' },
    { id: 149, name: 'Kashimobi Goodluck Emmanuel' },
    { id: 150, name: 'Emmanuel Goodnews' },
    { id: 151, name: 'Iheanacho Goodness' },
    { id: 152, name: 'Ibezim Ifechukwu Favour' },
    { id: 153, name: 'John Miracle' },
    { id: 154, name: 'Ambrose Precious Mmesoma' },
    { id: 155, name: 'Nwigwe Faith' },
    { id: 156, name: 'Ugwummadu Favour' },
    { id: 157, name: 'Oluchukwu Precious Chiamaka' },
    { id: 158, name: 'Alam Chisom Esther' },
    { id: 159, name: 'Charles-Eneje Chidumebi John' },
    { id: 160, name: 'Patrick Lucky' },
    { id: 161, name: 'Mekaowulu Promise Chiemelie' },
    { id: 162, name: 'Uwalaka Chidera' },
    { id: 163, name: 'Onuba Chukwuebuka' },
    { id: 164, name: 'Ani Favour Chinecherem' },
    { id: 165, name: 'Okafor Praise' },
    { id: 166, name: 'Johndavid Chimuanya Deborah' },
    { id: 167, name: 'Ukaegbu Chinenye Prisical' },
    { id: 168, name: 'Ani Shalom Chiamaka' },
    { id: 169, name: 'Udeji Dominion Chiemela' },
    { id: 170, name: 'Okoye Uchenna Mary' },
    { id: 171, name: 'Daniel Isaac' },
    { id: 172, name: 'Temidayo Odu' },
    { id: 173, name: 'Adiole Favour' },
    { id: 174, name: 'Idamunya David Ikenna' },
    { id: 175, name: 'Chinedu Marvelous Ifunanya' },
    { id: 176, name: 'Chukwuka Glory' },
    { id: 177, name: 'Christopher Kelechi Prosper' },
    { id: 178, name: 'Obinna Chinonso' },
    { id: 179, name: 'Kalu Joel' },
    { id: 180, name: 'Uchenna Jubilant' },
    { id: 181, name: 'Chinedum Paschal' },
    { id: 182, name: 'Ozougwu Ifebuchechukwu' },
    { id: 183, name: 'Chukwu Emmanuel Chukwunonso' },
    { id: 184, name: 'Romanus Success Chinwendu' },
    { id: 185, name: 'Opara Blessing' },
    { id: 186, name: 'Ibezim Estelle' },
    { id: 187, name: 'Nwankwo Richard' },
    { id: 188, name: 'Chibueze Joseph' },
    { id: 189, name: 'Nwaneri Faith Nkemdilim' },
    { id: 190, name: 'Iheanacho Crystal Ebubechukwudumebi' },
    { id: 191, name: 'Chinedu Daniel Ifeanyi' },
    { id: 192, name: 'Obinwa Chimdimma Hephzibah' },
    { id: 193, name: 'Okoro Peculiar' },
    { id: 194, name: 'Bernard Fortune' },
    { id: 195, name: 'Ude Joshua Chukwuemeka' },
    { id: 196, name: 'Nnadi Chinonso' },
    { id: 197, name: 'Raphael Testimony' },
    { id: 198, name: 'Abuchukwu Caleb' },
    { id: 199, name: 'Charles Bright Chibueze' },
    { id: 200, name: 'Olisa Jeremiah Chidera' }
];

function populateSelect(participants) {
    const select = document.getElementById('participantsSelect');
    select.innerHTML = ''; // Clear any existing options

    participants.forEach(participant => {
        const option = document.createElement('option');
        option.value = participant.name;
        
        option.textContent = participant.name;
        select.appendChild(option);
    });
}

function filterParticipants() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredParticipants = participants.filter(participant =>
        participant.name.toLowerCase().includes(query)
    );
    // if(filteredParticipants.length>0){
    //     document.getElementById('code').value = filteredParticipants[0].id
    //     document.getElementById('participantsSelect').value = filteredParticipants[0].name;
    // }
    populateSelect(filteredParticipants);
}
populateSelect(participants);

function reset() {
    localStorage.clear();
    scores = []
    document.getElementById("back").click()
}