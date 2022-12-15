import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUITS } from '../donnees-produits';
import { Produit } from '../Produit';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  
})
export class HomeComponent implements OnInit {
  produits : Produit[] = PRODUITS ;

  

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToProduit(produit : Produit) {
    this.router.navigate(['produit/' , produit.id]);
  }

}
