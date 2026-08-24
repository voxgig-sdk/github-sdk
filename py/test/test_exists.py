# Github SDK exists test

import pytest
from github_sdk import GithubSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GithubSDK.test(None, None)
        assert testsdk is not None
