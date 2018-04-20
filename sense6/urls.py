from django.conf.urls import url
from .views import (zhizhu, yongdu, wuran, shenghuo, zonghe, about)

urlpatterns = [
    url(r'^zhizhu/$', zhizhu, name='zhizhu'),
    url(r'^yongdu/$', yongdu, name='yongdu'),
    url(r'^wuran/$', wuran, name='wuran'),
    url(r'^shenghuo/$', shenghuo, name='shenghuo'),
    url(r'^zonghe/$', zonghe, name='zonghe'),
    url(r'^about/$', about, name='about'),
]
