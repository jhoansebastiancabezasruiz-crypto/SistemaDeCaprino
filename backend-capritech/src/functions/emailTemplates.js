// functions/emailTemplates.js
// Genera el HTML de cada tipo de correo con estilos CSS básicos.
// Todas las plantillas incluyen: título, nombre del destinatario,
// mensaje personalizado, fecha de envío y pie de página.

const baseStyle = `
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
    .container { max-width: 500px; margin: auto; background: #ffffff; border-radius: 8px;
                 overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.1); }
    .header { background-color: #2c3e50; color: #ffffff; padding: 20px; text-align: center; }
    .body { padding: 25px; color: #333333; line-height: 1.5; }
    .footer { background-color: #ecf0f1; color: #7f8c8d; text-align: center;
              padding: 12px; font-size: 12px; }
  </style>
`;

const wrapper = (titulo, contenidoInterno) => `
  <html>
    <head>${baseStyle}</head>
    <body>
      <div class="container">
        <div class="header"><h2>${titulo}</h2></div>
        <div class="body">${contenidoInterno}</div>
        <div class="footer">
          Este es un mensaje automático, por favor no responder.<br/>
          &copy; ${new Date().getFullYear()} - Servicio de Correos Nodemailer
        </div>
      </div>
    </body>
  </html>
`;

const fechaActual = () => new Date().toLocaleString('es-CO');

// 1. Correo de bienvenida
const welcomeEmail = (nombre) => wrapper(
  'Bienvenido/a',
  `<p>Hola <strong>${nombre}</strong>,</p>
   <p>Te damos la bienvenida a nuestra plataforma. Gracias por unirte a nosotros.</p>
   <p>Fecha de envío: ${fechaActual()}</p>`
);

// 2. Correo de recuperación de contraseña
const passwordResetEmail = (nombre, enlace = '#') => wrapper(
  'Recuperación de contraseña',
  `<p>Hola <strong>${nombre}</strong>,</p>
   <p>Recibimos una solicitud para restablecer tu contraseña. Haz clic en el enlace para continuar:</p>
   <p><a href="${enlace}">Restablecer contraseña</a></p>
   <p>Si no solicitaste este cambio, ignora este mensaje.</p>
   <p>Fecha de envío: ${fechaActual()}</p>`
);

// 3. Correo de notificación de registro exitoso
const registrationSuccessEmail = (nombre) => wrapper(
  'Registro exitoso',
  `<p>Hola <strong>${nombre}</strong>,</p>
   <p>Tu registro se ha completado exitosamente. Ya puedes empezar a usar tu cuenta.</p>
   <p>Fecha de envío: ${fechaActual()}</p>`
);

module.exports = {
  welcomeEmail,
  passwordResetEmail,
  registrationSuccessEmail,
};
