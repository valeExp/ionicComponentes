import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( arreglo: any[], 
             busqueda:string,
             columna:string): any[] {    
            
  
     if( busqueda === ''){
         return arreglo;
     }
  
     busqueda = busqueda.toLocaleLowerCase();

     return arreglo.filter( a => { return  a[columna].toLocaleLowerCase()
                                  .includes( busqueda) } );   

  }

}
