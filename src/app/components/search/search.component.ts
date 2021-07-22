import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { GithubService } from 'src/app/services/github.service';
import { forbiddenWorldValidator } from 'src/app/shared/forbiddenWorld';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  validateForm!: FormGroup;
  loading : boolean = false;
  users : Observable<User[]>;
  error : String = '';

  constructor(
    private fb: FormBuilder,
    private githubService : GithubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      usuario: [null, [Validators.required, Validators.minLength(4), forbiddenWorldValidator]],
    });
  }

  submitForm(): void {
    this.loading = true;
    const { usuario } = this.validateForm.value;
    this.githubService.searchUsers(usuario)
    .pipe(finalize(() => this.loading = false))
    .subscribe(
      (res)=> {
        this.users = of(res.items.filter((user, index) => index < 10));
      },
      error => {
        this.error = "Error buscando los usuarios",
        this.users = of([]);
      },
    )
  }

  onClickUser(user : User){
    this.router.navigate(['/user', { id: user.login }]);
  }
}
