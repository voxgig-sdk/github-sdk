<?php
declare(strict_types=1);

// Github SDK exists test

require_once __DIR__ . '/../github_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = GithubSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
