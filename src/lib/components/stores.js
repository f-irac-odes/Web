import { writable } from "svelte/store";
import {characters} from './characters'

export const characterChosed = writable(characters[0].Donnie);