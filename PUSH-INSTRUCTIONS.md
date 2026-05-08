# Cómo subir este repo a GitHub

## Paso 1: Crear el repo vacío en GitHub

1. Entra a https://github.com/new
2. **Repository name:** `job-tracker`
3. **Description:** `Free open-source job application tracker. Web + Desktop. No signup, no backend.`
4. **Public** (para que GitHub Pages funcione gratis)
5. **NO** marques "Add README", "Add .gitignore", ni "Add license" (ya los tenemos)
6. Click **Create repository**

## Paso 2: Push desde tu terminal

Abre PowerShell o Git Bash en la carpeta `job-tracker-repo` y corre:

```bash
cd "C:\Users\Aspen\Documents\Tracker Empleo\job-tracker-repo"

git init
git add .
git commit -m "Initial commit: Job Tracker web + desktop"
git branch -M main
git remote add origin https://github.com/luiselizondotech-dotcom/job-tracker.git
git push -u origin main
```

GitHub te pedirá login. Si usas HTTPS necesitas un Personal Access Token (no tu contraseña):
- https://github.com/settings/tokens → Generate new token (classic) → marca scope `repo` → copia el token y úsalo como password.

## Paso 3: Activar GitHub Pages

1. En tu repo: **Settings → Pages** (menú lateral izquierdo)
2. **Source:** `Deploy from a branch`
3. **Branch:** `main` / Folder: `/docs`
4. Click **Save**
5. Espera 1-2 minutos. Tu sitio estará en:

   **https://luiselizondotech-dotcom.github.io/job-tracker/**

## Paso 4: Compartir

Edita el repo en GitHub y agrega la URL de Pages en el campo **About** (icono de engranaje a la derecha del README). Así aparece visible al entrar al repo.

## Cambios futuros

Después de editar archivos:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualiza solo en ~1 min.

## Si te equivocas en el primer push

Si ya pusheaste y quieres rehacer:

```bash
git remote remove origin
git remote add origin https://github.com/luiselizondotech-dotcom/job-tracker.git
git push -u origin main --force
```
