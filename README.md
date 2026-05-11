# Job Tracker

Herramienta gratuita y open-source para llevar el control de tus aplicaciones de trabajo. Sin registro, sin servidor, tus datos se quedan en tu navegador.

🌐 **Disponible en Español e Inglés** — cambia el idioma con un solo clic.

## Demo en vivo

Úsala directo desde el navegador: https://luiselizondotech-dotcom.github.io/job-tracker/

No requiere instalar nada. Funciona offline después de la primera carga.

## Features

- **Tres vistas:** Tabla, Kanban con drag & drop, Dashboard con embudo de conversión
- **Cambio de idioma:** Botón 🌐 para cambiar entre Español e Inglés (persiste en localStorage)
- **Modo claro / oscuro:** Botón ☀️/🌙 para cambiar el tema visual (persiste en localStorage)
- **Recordatorios automáticos:** entrevistas próximas y aplicaciones sin respuesta
- **Filtros:** por estado, por ubicación y búsqueda por empresa/puesto
- **Ordenamiento:** clic en cualquier columna de la tabla para ordenar
- **Confirmación antes de borrar:** diálogo de confirmación antes de eliminar o limpiar datos
- **Autocompletado** de empresa y puesto basado en historial
- **Stats en tiempo real:** total, por estado, tasas de conversión
- **Export CSV** y backup JSON para migrar entre dispositivos
- **Animaciones cuidadas:** gradientes, transiciones, hover effects
- **100% en tu navegador:** nada se sube a ningún servidor
- **Atajo Ctrl+N** para nueva aplicación
- **Open Graph tags** para vista previa al compartir el link en redes sociales
- **Responsive** — funciona en móvil, tablet y escritorio

## Cómo usar

### Opción 1: Versión web (recomendado)

Abre https://luiselizondotech-dotcom.github.io/job-tracker/ y empieza. Tus datos se guardan en localStorage del navegador.

> Si limpias el caché del navegador o usas otro equipo, exporta primero un backup JSON desde el botón "Backup" e impórtalo después.

### Opción 2: Local sin instalar nada

```bash
git clone https://github.com/luiselizondotech-dotcom/job-tracker.git
cd job-tracker/docs
# Abre index.html con doble clic
```

### Opción 3: App de escritorio (Windows)

```bash
cd electron
npm install
npm start        # ejecutar
npm run build    # generar instalador .exe
```

## Estructura

```
job-tracker/
├── docs/              # Versión web (servida por GitHub Pages)
│   └── index.html
├── electron/          # Versión escritorio
│   ├── main.js
│   ├── preload.js
│   ├── package.json
│   └── src/index.html
├── LICENSE
└── README.md
```

## Campos que registra cada aplicación

Empresa, puesto, estado (Aplicado / Screening / Entrevista / Oferta / Rechazado), fecha de aplicación, salario, ubicación, contacto del recruiter, próximo paso con fecha, link de la vacante y notas libres.

## Privacidad

No hay backend. No hay analytics. No hay cookies de rastreo. Tus datos viven solo en el localStorage de tu navegador o en el localStorage de la app Electron. Si quieres respaldar, usa el botón Backup que descarga un JSON local.

## Recomendaciones para sacarle el máximo

- Registra cada aplicación el mismo día que la envías.
- Actualiza el estado apenas cambie (no lo dejes para después).
- Si tu tasa aplicado→entrevista es menor a 10%, revisa tu CV o filtra mejor las vacantes.
- Si tu tasa entrevista→oferta es menor a 30%, practica entrevistas técnicas y conductuales.
- Después de cada entrevista, anota: quién entrevistó, qué preguntaron, qué responderías diferente.
- Los referidos convierten mejor que aplicar en frío. Usa LinkedIn para buscar contactos en empresas objetivo.

## Contribuir

Pull requests son bienvenidos. Para cambios grandes, abre un issue primero para discutir qué te gustaría cambiar.

## Licencia

MIT — úsalo, modifícalo, compártelo libremente.

---

Hecho por [@luiselizondotech-dotcom](https://github.com/luiselizondotech-dotcom)
