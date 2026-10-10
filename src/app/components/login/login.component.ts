import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="tab-pane">
      <div class="badge-icon">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
      <h2>Qué bueno verte</h2>
      <p class="subtitle">Inicia sesión para entrar a tu cuenta.</p>

      <form (ngSubmit)="onSubmitLogin()" class="login-form">
        <div class="form-group">
          <label>Correo electrónico</label>
          <div class="input-wrapper">
            <span class="input-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
            <input type="email" [(ngModel)]="email" name="email" placeholder="hola@ejemplo.com" required>
          </div>
        </div>

        <div class="form-group">
          <label>Contraseña</label>
          <div class="input-wrapper">
            <span class="input-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
            <input [type]="showPassword ? 'text' : 'password'" [(ngModel)]="password" name="password" required>
            <span class="eye-icon" (click)="togglePasswordVisibility()"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
          </div>
        </div>

        <div class="form-row-options">
          <label class="checkbox-label"><input type="checkbox" [(ngModel)]="rememberMe" name="rememberMe"> <span>Recordarme</span></label>
          <a href="#" class="forgot-link" (click)="$event.preventDefault()">¿Olvidaste tu clave?</a>
        </div>

        <div class="action-buttons">
          <button type="submit" class="btn-primary">Iniciar sesión <span>→</span></button>
          <button type="button" class="btn-outline">Crear una cuenta</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    $primary-color: #1b5e3d;
    $border-color: #e2e8e4;
    .tab-pane { display: flex; flex-direction: column; gap: 14px; }
    .badge-icon { width: 40px; height: 40px; background-color: #e6f4ed; color: $primary-color; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
    h2 { font-size: 22px; font-weight: 700; color: #111827; }
    .subtitle { font-size: 13px; color: #4b5563; margin-top: -6px; }
    .login-form { display: flex; flex-direction: column; gap: 12px; }
    .form-group { display: flex; flex-direction: column; gap: 4px; }
    .form-group label { font-size: 12px; font-weight: 600; color: #111827; }
    .input-wrapper { position: relative; display: flex; align-items: center; }
    .input-wrapper input { width: 100%; padding: 9px 12px 9px 36px; border: 1px solid $border-color; border-radius: 8px; font-size: 13px; outline: none; &:focus { border-color: $primary-color; box-shadow: 0 0 0 3px rgba(27, 94, 61, 0.1); } }
    .input-icon { position: absolute; left: 10px; color: #9ca3af; }
    .eye-icon { position: absolute; right: 10px; color: #9ca3af; cursor: pointer; }
    .form-row-options { display: flex; justify-content: space-between; align-items: center; font-size: 12px; margin: 2px 0; }
    .checkbox-label { display: flex; align-items: center; gap: 6px; color: #4b5563; cursor: pointer; input { accent-color: $primary-color; } }
    .forgot-link { color: $primary-color; text-decoration: none; font-weight: 500; &:hover { text-decoration: underline; } }
    .action-buttons { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
    .action-buttons button { width: 100%; padding: 10px 14px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: none; }
    .btn-primary { background-color: $primary-color; color: #fff; &:hover { background-color: #14472e; } }
    .btn-outline { background-color: #fff; color: $primary-color; border: 1px solid $border-color; &:hover { background-color: #f8faf8; } }
  `]
})
export class LoginComponent {
  email: string = 'hola@ejemplo.com';
  password: string = '••••••••';
  rememberMe: boolean = true;
  showPassword: boolean = false;

  togglePasswordVisibility() { this.showPassword = !this.showPassword; }
  onSubmitLogin() { alert(`Iniciando sesión con el correo: ${this.email}`); }
}
