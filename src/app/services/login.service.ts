import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  lista:any[] = [];
  conocer:boolean;

  constructor(protected http:HttpClient,protected _router:Router) { }

  accederLogin(entradaUsername:string,entradaPass:string){
    const json = "assets/UserJSON/user.json";
    let conocer:boolean;
    this.http.get(json).subscribe((data:any)=>{
      this.lista = data.usuario;
      for(let item of this.lista){
        console.log(item.username);
        conocer = this.verificarParam(entradaUsername,entradaPass,item.username,item.password);
        console.log("RESULTADO: "+conocer);
        if(conocer){ break; }
      }
    });
    //console.log("VALOR: " + conocer);
    //return conocer;
  }

  verificarParam(entradaUsername:string, entradaPass:string , username:string , pass:string):boolean{
    let saber:boolean = false;
    if(entradaUsername == username && entradaPass == pass){
      console.log("ENTRO");
      saber=true;
      this._router.navigate(['home']);
    }
    return saber;
  }

}
