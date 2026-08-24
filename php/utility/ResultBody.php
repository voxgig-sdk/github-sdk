<?php
declare(strict_types=1);

// Github SDK utility: result_body

class GithubResultBody
{
    public static function call(GithubContext $ctx): ?GithubResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
