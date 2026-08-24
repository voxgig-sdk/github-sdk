<?php
declare(strict_types=1);

// Github SDK utility: prepare_body

class GithubPrepareBody
{
    public static function call(GithubContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
