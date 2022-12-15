import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUITS } from '../donnees-produits';
import { Produit } from '../Produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: 'liste-produit.component.html',
  styles: [
  ]
})
export class ListeProduitComponent implements OnInit {

  produits : Produit[] ;

  constructor(private router : Router){  }

  ngOnInit() : void {
    this.produits = PRODUITS ;
    console.table(this.produits) ;
    
  }

  goToProduit(produit : Produit) {
    this.router.navigate(['produit/' , produit.id]);
  }

}
