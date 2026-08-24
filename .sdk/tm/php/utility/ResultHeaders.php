<?php
declare(strict_types=1);

// Github SDK utility: result_headers

class GithubResultHeaders
{
    public static function call(GithubContext $ctx): ?GithubResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
