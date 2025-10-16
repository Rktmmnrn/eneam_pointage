# -*- coding: utf-8 -*-
{
    'name': "eneamfront",

    'summary': "module frontEnd de eneam pour pointage personnelle",

    'description': """
I'll do that after
    """,

    'author': "Fenohery",
    'website': "https://fenohery-pf-00.vercel.app/",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Tools',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['website'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/calendar_template.xml',
    ],
    'installable': True,
    'application': True,
}

