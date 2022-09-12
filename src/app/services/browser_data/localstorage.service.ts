import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  
  /**
   * Función que setea una key con un valor cualquiera dentro del localstorage
   * @param {string} key clave identificadora para guardar
   * @param {any} data dato a guardar
   */
  set(key : string, data : any){
    try {
      localStorage.setItem(key,JSON.stringify(data));
    }catch(e){
      console.error(e);
    }
  }

  /**
   * Función que entrega el valor un valor guardado en el localstorage
   * @param {string} key Clave identificadora para buscar el valor guardado 
   * @returns {any} Valor guardado en localstorage
   */
  get(key : string){
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * Función para eliminar un clave : valor del localstorage
   * @param {string} key Clave identificadora para buscar el valor guardado 
   */
  remove(key : string) : void{
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing key ', e);
    }
  }

  /**
   * Función que limpia todos los datos del localstorage
   */
  clear() : void{
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Error cleaning localstorage ',e);
    }
  }

}
