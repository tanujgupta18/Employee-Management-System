from django.urls import path
from .views import *

urlpatterns = [
   path("home/",emp_home),
   path("add_emp/",add_emp),
   path("delete-emp/<int:emp_id>",delete_emp),
   path("update-emp/<int:emp_id>",update_emp),
   path("do-update-emp/<int:emp_id>",do_update_emp),
   path("testimonials/",testimonials),
   path("feedback/",feedback),
]