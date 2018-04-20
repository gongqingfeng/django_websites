from django.conf.urls import url
from django.contrib.auth import views as auth_views

from .views import (activate, activation_complete, register, log_in, log_out,
                    registration_closed, registration_complete)

from .views import (page_error, page_not_found, permission_denied, bad_request)

handler403 = permission_denied
handler404 = page_not_found
handler500 = page_error
handler400 = bad_request
urlpatterns = [
    url(r'^register/$', register, name='users_register'),
    url(r'^register/closed/$', registration_closed,
        name='users_registration_closed'),
    url(r'^register/complete/$', registration_complete,
        name='users_registration_complete'),
    url(r'^activate/complete/$', activation_complete,
        name='users_activation_complete'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        activate, name='users_activate'),
    url(r'^login/$', log_in,
        name='user_login'),
    url(r'^logout/$', log_out,
        name='users_logout'),
    url(r'^password_change/$', auth_views.PasswordChangeView.as_view(
            template_name='users/password_change_form.html',
            success_url='/accounts/password_change/done/'),
        name='users_password_change'),
    url(r'^password_change/done/$', auth_views.PasswordChangeDoneView.as_view(
        template_name='users/password_change_done.html'),
        name='users_password_change_done'),
    url(r'^password_reset/$', auth_views.PasswordResetView.as_view(
            template_name='users/password_reset_form.html',
            email_template_name='users/password_reset_email.html',
            subject_template_name='users/password_reset_subject.html',
            success_url='/accounts/password_reset/done/'),
        name='users_password_reset'),
    url(r'^password_reset/done/$',
        auth_views.PasswordResetDoneView.as_view(
            template_name='users/password_reset_done.html'),
        name='users_password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        auth_views.PasswordResetConfirmView.as_view(
            template_name='users/password_reset_confirm.html',
            success_url='/accounts/reset/done/'),
        name='users_password_reset_confirm'),
    url(r'^reset/done/$', auth_views.PasswordResetCompleteView.as_view(
        template_name='users/password_reset_complete.html'),
        name='users_password_reset_complete'),
]
