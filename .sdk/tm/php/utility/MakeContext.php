<?php
declare(strict_types=1);

// Github SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GithubMakeContext
{
    public static function call(array $ctxmap, ?GithubContext $basectx): GithubContext
    {
        return new GithubContext($ctxmap, $basectx);
    }
}
