from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from books.views import HomeTemplateView
from books.views import BookViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)

urlpatterns = [
    url(r'^api/', include(router.urls)),
]


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(router.urls))
]
