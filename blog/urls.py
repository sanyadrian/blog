from django.urls import path
from . import views

urlpatterns = [
    path("", views.StartingPageView.as_view(), name="starting-page"),
    path("posts", views.AllPostView.as_view(), name="posts-page"),
    path("posts/<slug:slug>", views.SinglePostView.as_view(), name="post-detail-page"),
    path("read-later", views.ReadLaterView.as_view(), name="read-later"),
    path('courses', views.CoursesView.as_view(), name="courses-page"),
    path('courses/<slug:slug>', views.SingleCourseView.as_view(), name="course-detail-page"),
    path('projects', views.ProjectsView.as_view(), name="projects-page"),
    path("projects/<slug:slug>", views.SingleProjectView.as_view(), name="project-detail-page")
]