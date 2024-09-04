from django.contrib import admin

from .models import Post, Author, Tag, Comment, Course, Project
# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_filter = ("author", "tags", "date")
    list_display = ("title", "date", "author")
    prepopulated_fields = {"slug": ("title", )}


class CommentAdmin(admin.ModelAdmin):
    list_display = ("user_name", "post")

class CourseAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title", )}

class ProjectAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title", )}

admin.site.register(Post, PostAdmin)
admin.site.register(Author)
admin.site.register(Tag)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Project, ProjectAdmin)

