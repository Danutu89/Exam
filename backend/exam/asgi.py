"""
ASGI config for nowjobs project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

if "DJANGO_ENV" in os.environ and os.environ["DJANGO_ENV"] == "prod":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exam.settings")
else:
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "exam.settings-dev")

application = get_asgi_application()
