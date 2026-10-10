import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-pane">
      <div class="badge-icon">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
      </div>
      <h2>¿Cómo te ayudamos?</h2>
      <p class="subtitle">Resuelve tus dudas para entrar a tu cuenta.</p>

      <div class="faq-list">
        <div class="faq-item"><h4>¿Olvidaste tu contraseña?</h4><p>En Acceso, pulsa «¿Olvidaste tu clave?» para recibir un enlace en tu correo.</p></div>
        <div class="faq-item"><h4>¿No puedes iniciar sesión?</h4><p>Revisa tu correo y contraseña. Comprueba que no haya espacios ni mayúsculas de más.</p></div>
        <div class="faq-item"><h4>¿Aún no tienes una cuenta?</h4><p>Pulsa «Crear una cuenta» en Inicio o Acceso para registrarte con tu correo.</p></div>
      </div>

      <p class="faq-footer-text">¿Necesitas más ayuda? Estamos contigo.</p>

      <div class="action-buttons">
        <button class="btn-primary">Contactar con soporte <span>→</span></button>
      </div>
    </div>
  `,
  styles: [`
    $primary-color: #1b5e3d;
    .tab-pane { display: flex; flex-direction: column; gap: 14px; }
    .badge-icon { width: 40px; height: 40px; background-color: #e6f4ed; color: $primary-color; border-radius: 10px; display: flex; align-items: center; justify-content: center; }
    h2 { font-size: 22px; font-weight: 700; color: #111827; }
    .subtitle { font-size: 13px; color: #4b5563; margin-top: -6px; }
    .faq-list { display: flex; flex-direction: column; gap: 10px; }
    .faq-item { border-left: 3px solid $primary-color; padding-left: 10px; h4 { font-size: 13px; font-weight: 600; color: #111827; } p { font-size: 12px; color: #4b5563; } }
    .faq-footer-text { font-size: 12px; color: #4b5563; }
    .action-buttons { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; button { width: 100%; padding: 10px 14px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: none; } }
    .btn-primary { background-color: $primary-color; color: #fff; &:hover { background-color: #14472e; } }
  `]
})
export class HelpComponent {}
