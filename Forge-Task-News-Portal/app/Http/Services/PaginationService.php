<?php

namespace App\Http\Services;

use Illuminate\View\View;
use App\Models\AllHeadlines;
use Illuminate\Http\Request;

class PaginationService
{
    public function getPaginationLinks($total_results, $per_page, $current_page)
    {
        $pages = ceil($total_results / $per_page);
        $links = [];

        for ($i = 1; $i <= $pages; $i++) {
            $links[] = [
                "page" => $i,
                "url" => "?page=$i",
                "active" => $i == $current_page,
            ];
        }

        return $links;
    }
}
