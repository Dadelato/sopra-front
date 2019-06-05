

let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla', 'Betis'];
//let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla'];

let equiposRandom = [];

while(equipos.length > 0){
    let random = Math.floor(Math.random()*equipos.length);;
    let eq = equipos.splice(random,1);
    equiposRandom.push(eq);
}

while(equiposRandom.length > 1){
    let [eq1, eq2, ...restoEquipos] = equiposRandom; 
    console.log(`${eq1} - ${eq2}`);
    equiposRandom = restoEquipos;
}

if(equiposRandom.length === 1){
    console.log(`${equiposRandom[0]} ha pasado de ronda.`);
}
