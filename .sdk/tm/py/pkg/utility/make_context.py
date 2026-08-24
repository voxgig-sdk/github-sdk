# Github SDK utility: make_context

from projectname_sdk.core.context import GithubContext


def make_context_util(ctxmap, basectx):
    return GithubContext(ctxmap, basectx)
