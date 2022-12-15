import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUITS } from '../donnees-produits';
import { Produit } from '../Produit';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail-produit',
  templateUrl:'detail-produit.component.html',
  styles: [
  ]
})
export class DetailProduitComponent implements OnInit {

  produits : Produit[]  ;
  produitCurrent : Produit ;
   
  constructor(private route: ActivatedRoute , private location : Location) { }

  ngOnInit(): void {
    this.produits = PRODUITS;

    const idproduit = this.route.snapshot.paramMap.get('id');

    for(let i = 0; i<this.produits.length; i++) {
      if(Number(idproduit) == this.produits[i].id) {
        this.produitCurrent = this.produits[i];
      }

    
  }

 }

 goBack() {
    this.location.back() ;
 }

}
