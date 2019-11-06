import {Injectable} from'@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';

//import 'rxjs/add/operator/map';
import {Observable} from'rxjs';

@Injectable()
export class appservice{
    public url:string;
    constructor(
        public _http:HttpClient
    ){ 
    }

    prueba(){
        return this._http.get<any>(`http://localhost:8000/`).subscribe(resp=>{
            console.log(resp);
        });;
    }
 
}