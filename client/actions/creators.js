import { ACTIONS } from './types';

export function inputChange(text) {
   return {
     type: ACTIONS.CHANGE_INPUT,
     value: text
   };
 }