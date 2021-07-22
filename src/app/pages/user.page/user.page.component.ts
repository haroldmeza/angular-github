import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user.page',
  templateUrl: './user.page.component.html',
  styleUrls: ['./user.page.component.scss']
})
export class UserPageComponent implements OnInit {
  loading: boolean = true;
  user : Observable<User>;
  error : String = '';

  constructor(
    private githubService : GithubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.githubService.searchUserInfo(id)
        .pipe(finalize(() => this.loading = false))
        .subscribe(
          (res)=> {
            this.user = of(res);
          },
          error => {
            console.log('accaaaa')
            this.error = "Error buscando informacion del usuario"
          },
        );
    });
  }

}

