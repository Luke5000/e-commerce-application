import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html' ,
  styles: [
  ]
})
export class NavBarComponent implements OnInit {

  inputSearch: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  searchProduct(){
    console.log(this.inputSearch);
    
    //this.products = PRODUCTS;
    this.router.navigate(['produit/', this.inputSearch]);
    // .then(() => {
    //   window.location.reload();
    // });
    
  }


}
