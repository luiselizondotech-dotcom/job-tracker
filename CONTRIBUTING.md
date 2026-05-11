# Contribuir a Aplico

¡Gracias por tu interés en contribuir! Aplico es un proyecto personal que se convirtió en open source, y cada aportación cuenta.

## Antes de empezar

Este repositorio es el proyecto original. Para mantener la integridad del proyecto:

- Las contribuciones se hacen **únicamente via Pull Request** a este repo
- No se aceptan forks que se redistribuyan como un proyecto diferente sin atribución
- La licencia MIT aplica: puedes usar el código, pero el crédito original debe mantenerse

## ¿Cómo contribuir?

### 1. Reportar un bug

Abre un [Issue](https://github.com/luiselizondotech-dotcom/job-tracker/issues) con:

- Descripción clara del problema
- Pasos para reproducirlo
- Navegador y sistema operativo que usas
- Screenshot si aplica

### 2. Proponer una nueva feature

Abre un [Issue](https://github.com/luiselizondotech-dotcom/job-tracker/issues) con la etiqueta `enhancement` antes de escribir código. Así evitamos trabajo duplicado y podemos discutir si encaja con la visión del proyecto.

### 3. Enviar código (Pull Request)

```bash
# 1. Haz fork del repo
# 2. Clona tu fork
git clone https://github.com/TU-USUARIO/job-tracker.git

# 3. Crea una rama descriptiva
git checkout -b feat/nombre-de-tu-feature
# o
git checkout -b fix/nombre-del-bug

# 4. Haz tus cambios y commitea
git add .
git commit -m "feat: descripción clara del cambio"

# 5. Push a tu fork
git push origin feat/nombre-de-tu-feature

# 6. Abre un Pull Request hacia main en este repo
```

### Convención de commits

Usa prefijos descriptivos:

| Prefijo | Cuándo usarlo |
|---|---|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección de bug |
| `style:` | Cambios visuales / CSS |
| `refactor:` | Mejora de código sin cambiar comportamiento |
| `docs:` | Cambios en documentación |
| `chore:` | Tareas de mantenimiento |

## Principios del proyecto

Aplico nació por necesidad: simple, funcional y sin fricción. Al contribuir, ten en cuenta:

- **Sin dependencias externas** — todo el código es vanilla JS, HTML y CSS en un solo archivo. No se aceptan frameworks ni librerías externas.
- **Sin backend** — los datos viven en localStorage del usuario. No se aceptan cambios que requieran servidor.
- **Simplicidad primero** — si una feature complica la UX sin aportar valor claro, probablemente no encaje.
- **Bilingüe** — cualquier texto visible al usuario debe agregarse en español e inglés en el objeto de traducciones.

## Ideas de contribución

Si quieres aportar pero no sabes por dónde empezar, estas áreas están abiertas:

- 🐛 Reportar bugs en distintos navegadores
- ♿ Mejoras de accesibilidad (ARIA labels, navegación por teclado)
- 🌍 Traducción a otros idiomas (portugués, francés...)
- 📱 Mejoras responsive para móvil
- 🎨 Temas de color alternativos
- 📊 Nuevas métricas en el Dashboard
- 🧪 Ideas de features (abre un Issue primero)

## Código de conducta

Este es un espacio respetuoso. Se espera:

- Comunicación constructiva y sin ataques personales
- Respeto por el trabajo y el tiempo de los demás
- Feedback honesto pero amable en los code reviews

---

¿Dudas? Abre un Issue o contáctame en [LinkedIn](https://www.linkedin.com/in/luiselizondotech).

Hecho con ❤️ por [@luiselizondotech-dotcom](https://github.com/luiselizondotech-dotcom)
