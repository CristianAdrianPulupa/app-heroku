# 📦 App-Heroku: Gestión de Clientes

Aplicación Node.js + Express con conexión a MySQL y despliegue automático en Heroku utilizando GitHub Actions.

![Deploy Status](https://github.com/CristianAdrianPulupa/app-heroku/actions/workflows/deploy.yml/badge.svg)

---

## 🚀 Despliegue Automático

Cada vez que se hace `git push` a la rama `main`, el código se despliega automáticamente a Heroku mediante **GitHub Actions**.

🔗 [Ver app en producción](https://clientes-heroku-pulupa.herokuapp.com)

---

## ⚙️ Tecnologías Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Heroku](https://www.heroku.com/)
- [GitHub Actions](https://github.com/features/actions)

---

## 🧪 Automatización con GitHub Actions

El flujo `deploy.yml` incluye:

- ✅ Instalación de dependencias
- ✅ Instalación de Heroku CLI
- ✅ Autenticación segura con API Key
- ✅ Despliegue con `git push --force`
- ✅ Manejo de shallow clones
- ✅ Badge de estado en tiempo real



