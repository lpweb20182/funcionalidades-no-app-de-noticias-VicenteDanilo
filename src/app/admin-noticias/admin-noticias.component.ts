import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-noticias',
  templateUrl: './admin-noticias.component.html',
  styleUrls: ['./admin-noticias.component.css']
})
export class AdminNoticiasComponent implements OnInit {
  noticias$ = null;
  salvar_ok = false;
  salvar_erro = false;
  editor = false;
  constructor(private service: NoticiasService, private router: Router) { }

  ngOnInit() {
    this.noticias$ = this.service.todas();
    this.editor = this.service.isEditor();
  }

  publicar(noticia){
    this.service.publicar(noticia).subscribe(
      noticia => {
        this.salvar_ok = true;
      },
      erro => {
        console.log(erro);
        this.salvar_erro = true;
      }
    )
  }
}
