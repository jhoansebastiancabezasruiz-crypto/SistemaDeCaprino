const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, '..', 'logs');
const LOG_FILE = path.join(LOG_DIR, 'errors.log');


if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}


 */
const createLog = async (error) => {
  const timestamp = new Date().toISOString();
  const message = `[${timestamp}] ERROR: ${error.message}\n`;

  
  console.error(message);

  
  try {
    fs.appendFileSync(LOG_FILE, message);
  } catch (fileError) {
    console.error('No se pudo escribir en el archivo de logs:', fileError.message);
  }
};

module.exports = {
  createLog,
};
