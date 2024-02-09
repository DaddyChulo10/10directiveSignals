import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interface/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {


  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  private userService = inject(UsersServiceService)
  public userId = signal(1)
  public currentUser = signal<User | undefined>(undefined)
  public userWasFound = signal(true)
  public fullName = computed<string>(() => {
    if (!this.currentUser()) return 'Usuario no encontrado'

    return `${this.currentUser()?.first_name}  ${this.currentUser()?.last_name}`
  })

  loadUser(id: number) {
    if (id <= 0) return

    this.currentUser.set(undefined)
    this.userId.set(id)

    this.userService.getUserById(id)
      .subscribe({
        next: (user) => {
          this.currentUser.set(user)
          this.userWasFound.set(true)
        },
        error: () => {
          this.userWasFound.set(false)
          this.currentUser.set(undefined)
        }
      })
  }

}
