"""Urls for monadd API prefixed by api/."""
from rest_framework.routers import DefaultRouter, Route, escape_curly_brackets

from api.views.products import (
    ProductViewSet
)

# from users.views import (
#     ChangePasswordView,
#     UserModelViewSet,
#     PatientTherapistModelViewSet,
#     DirectoryTherapistFilter,
#     GetTherapistDirectoryViewSet,
# )


class HyphenatedRouter(DefaultRouter):
    """Same as Default Router only switches _ with -"""

    def _get_dynamic_route(self, route, action):
        init_kwargs = route.initkwargs.copy()
        init_kwargs.update(action.kwargs)

        url_path = escape_curly_brackets(action.url_path)

        return Route(
            url=route.url.replace("{url_path}", url_path.replace("_", "-")),
            mapping=action.mapping,
            name=route.name.replace("{url_name}", action.url_name),
            detail=route.detail,
            initkwargs=init_kwargs,
        )


router = HyphenatedRouter()
router.register("product", ProductViewSet, basename="product")

urlpatterns = [] + router.urls
