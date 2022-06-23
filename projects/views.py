from django.views.generic import ListView

from projects.models import Projects


class ProjectsListView(ListView):
    model = Projects
    template_name = "projects/project_list.html"
