import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(valor: string, typeBool: boolean = true): string {
        return typeBool ? valor.toUpperCase(): valor.toLowerCase();
    }
}