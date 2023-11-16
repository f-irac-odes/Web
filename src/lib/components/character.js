let tank_hp_min = 3000
let tank_shiled_min = 3000

export let characters = [ 
    {
        name : "Donnie",
        attack : {
            damage : 100,
            hits: 7, 
            order : "random",
            range : 3,
            lenght : 10,
            time_between_shooting : 100,
            spread : 4,
            reaload_time : 1,
            magazine_size : 9,
        },

        hitPoints : tank_hp_min,
        upgrade_per_level : 100,
        shield : tank_shiled_min,
        speed : 0.5
    },
    {
        name : "Saraci",
        attack : {
            damage : 500,
            hits: 7, 
            order : "random",
            range : 3,
            lenght : 10,
            time_between_shooting : 100,
            spread : 4,
            reaload_time : 1,
            magazine_size : 9,
        },

        hitPoints : tank_hp_min,
        upgrade_per_level : 100,
        shield : tank_shiled_min,
        speed : 0.7
    }
]