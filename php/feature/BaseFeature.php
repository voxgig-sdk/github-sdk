<?php
declare(strict_types=1);

// Github SDK base feature

class GithubBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GithubContext $ctx, array $options): void {}
    public function PostConstruct(GithubContext $ctx): void {}
    public function PostConstructEntity(GithubContext $ctx): void {}
    public function SetData(GithubContext $ctx): void {}
    public function GetData(GithubContext $ctx): void {}
    public function GetMatch(GithubContext $ctx): void {}
    public function SetMatch(GithubContext $ctx): void {}
    public function PrePoint(GithubContext $ctx): void {}
    public function PreSpec(GithubContext $ctx): void {}
    public function PreRequest(GithubContext $ctx): void {}
    public function PreResponse(GithubContext $ctx): void {}
    public function PreResult(GithubContext $ctx): void {}
    public function PreDone(GithubContext $ctx): void {}
    public function PreUnexpected(GithubContext $ctx): void {}
}
