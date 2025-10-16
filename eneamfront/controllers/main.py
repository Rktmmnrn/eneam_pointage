from odoo import http
import logging
_logger = logging.getLogger(__name__)

class Eneamfront (http.Controller):
    @http.route('/pointage/calendrier', auth='public', website=True, sitemap=False)
    def calendrier(self, **kw):
        _logger.info(">>> CALENDRIER APPELLÉE, template=%s", "eneamfront.calendar_page")
        # L'url de l'api django
        return http.request.render('eneamfront.calendar_page',{
            'api_url': 'http://127.0.0.1:8000/api/pointage/',
            })