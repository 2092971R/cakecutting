from django.conf.urls import patterns, url
from project import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'),
		url(r'^twoperson/', views.twoperson, name= 'twoperson'),
		url(r'^threeperson/', views.threeperson, name= 'threeperson'),
		url(r'^movingknife/', views.movingknife, name= 'movingknife'),
		url(r'^fourperson/', views.fourperson, name= 'fourperson'),
		url(r'^about/', views.about, name= 'about')
		)