# ENEAM – Gestion des présences RH intranet

Module Odoo 17 + Django pour le pointage du personnel de l’École Nationale d’Enseignement de l’Aéronautique et de la Météorologie.

## Fonctionnalités

- Calendrier HTML5 embarqué
- API REST Django (`localhost:8000/api/personnel/`) pour la liste du personnel
- Vue QWeb Odoo (`/pointage/calendrier`) accessible en intranet
- Bouton « Afficher » qui rapatrie les présences via JS

## Architecture

```text
Odoo 17 (port 8069) ─┬─ Website → template QWeb « eneamfront.calendar_page »
                     └─ Module « eneamfront » (ce repo)

Django (port 8000) ── API REST `/api/personnel/` (liste JSON)
