"""
WSGI config for nowjobs project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

if "DJANGO_ENV" in os.environ and os.environ["DJANGO_ENV"] == "prod":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exam.settings")
else:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exam.settings-dev")

application = get_wsgi_application()