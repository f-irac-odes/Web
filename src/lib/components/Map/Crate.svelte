<script>
	import {T, useThrelte} from '@threlte/core'
	import { Collider, useRapier } from "@threlte/rapier";
	import CrateStrong from '../models/crateStrong.svelte';
	import { user } from '../user';
	import Entity from '../entity/Entity.svelte';

    let collider;
    let maxlife = 9000;
    let life = maxlife;
    let {world} = useRapier();
    let {scene} = useThrelte();
    export let position = [];
    var damegeTaken = 0;
</script>
<T.Group {position} let:ref>
    <CrateStrong scale={1.5} />
    <Collider  args={[0.5, 0.5, 0.5]} bind:collider shape={'cuboid'}  on:contact={() =>{
        if(damegeTaken > life){ 
           world.removeCollider(collider, false)
           ref.visible = false
        }else{
            damegeTaken += user.gameStats.character_chose.attack.damage
            life -= damegeTaken
        }
    } 
    }/>
    <Entity {life} {maxlife}/>
 </T.Group>