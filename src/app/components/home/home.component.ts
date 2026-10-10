import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="tab-pane">
      <div class="badge-icon">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
      </div>
      <h2>Bienvenido a nexo</h2>
      <p class="subtitle">Tu espacio para gestionar tu cuenta, de forma sencilla y segura.</p>

      <div class="feature-list">
        <div class="feature-item">
          <div class="feat-icon"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
          <div><h4>Tu cuenta, en un solo lugar</h4><p>Consulta y actualiza tus datos fácilmente.</p></div>
        </div>
        <div class="feature-item">
          <div class="feat-icon"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
          <div><h4>Acceso seguro</h4><p>Entra con tu correo y tu contraseña.</p></div>
        </div>
        <div class="feature-item">
          <div class="feat-icon"><svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path></svg></div>
          <div><h4>Estamos para ayudarte</h4><p>Encuentra respuestas en la sección Ayuda.</p></div>
        </div>
      </div>

      <div class="action-buttons">
        <button class="btn-primary" routerLink="/acceso">Iniciar sesión <span>→</span></button>
        <button class="btn-outline">Crear una cuenta</button>
      </div>
    </div>
  `,
  styles: [`
    $primary-color: #1b5e3d;
    $border-color: #e2e8e4;
    .tab-pane { display: flex; flex-direction: column; gap: 14px; }
    .badge-icon { width: 40px; height: 40px; background-color: #e6f4ed; color: $primary-color; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
    h2 { font-size: 22px; font-weight: 700; color: #111827; }
    .subtitle { font-size: 13px; color: #4b5563; margin-top: -6px; }
    .feature-list { display: flex; flex-direction: column; gap: 12px; margin: 4px 0; }
    .feature-item { display: flex; gap: 12px; align-items: flex-start; }
    .feat-icon { color: $primary-color; background-color: #f0f7f3; padding: 6px; border-radius: 6px; display: flex; }
    .feature-item h4 { font-size: 14px; font-weight: 600; color: #111827; }
    .feature-item p { font-size: 12px; color: #4b5563; }
    .action-buttons { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
    .action-buttons button { width: 100%; padding: 10px 14px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: none; text-decoration: none; }
    .btn-primary { background-color: $primary-color; color: #fff; &:hover { background-color: #14472e; } }
    .btn-outline { background-color: #fff; color: $primary-color; border: 1px solid $border-color; &:hover { background-color: #f8faf8; } }
  `]
})
export class HomeComponent {}
