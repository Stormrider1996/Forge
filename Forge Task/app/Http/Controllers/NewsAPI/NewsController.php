<?php

namespace App\Http\Controllers\NewsAPI;

use Illuminate\View\View;
use App\Models\AllHeadlines;
use App\Models\TopHeadlines;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Services\PaginationService;
use App\Models\News;

class NewsController extends Controller
{
    public function getReqParams()
    {
        return [
            "q" => request('q'),
            "source" => request('source'),
            "domain" => request('domain'),
            "exclude_domain" => request('exclude_domain'),
            "from" => request('from'),
            "to" => request('to'),
            "language" => request('language'),
            "sort_by" => request('sort_by'),
            "page_size" => request('page_size'),
            "page" => request('page'),
            "country" => request('country'),
            "category" => request('category'),
        ];
    }

    /**
     * @OA\Get(
     *     path="/news/everything",
     *     tags={"News"},
     *     summary="Get all news articles",
     *     description="Returns a paginated list of news articles",
     *     @OA\Parameter(
     *         name="q",
     *         in="query",
     *         description="The search query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="source",
     *         in="query",
     *         description="The source of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="domain",
     *         in="query",
     *         description="The domain of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="exclude_domain",
     *         in="query",
     *         description="The domain to exclude from the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="from",
     *         in="query",
     *         description="The start date of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="to",
     *         in="query",
     *         description="The end date of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="language",
     *         in="query",
     *         description="The language of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="sort_by",
     *         in="query",
     *         description="The sort order of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="page_size",
     *         in="query",
     *         description="The number of news articles per page",
     *         required=false,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="The current page number",
     *         required=false,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/News")
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function indexAllNews(Request $request, PaginationService $pagination): View
    {
        $params = $this->getReqParams();

        $articles = News::paginatedListAllNews(
            $request->q,
            $request->source,
            $request->domain,
            $request->exclude_domain,
            $request->from,
            $request->to,
            $request->language ?? $request->user()->language,
            $request->sort_by,
            $request->page_size,
            $request->page,
        );

        $totalPages = $articles->totalResults;
        $_articles = $articles->articles;

        $pagination_links = $pagination->getPaginationLinks($totalPages, $params['page_size'] ?? 6, $params['page'] ?? 1);

        $sortParms = News::getSortBy();

        return view('all-headlines', compact('_articles',  'params', 'totalPages', 'pagination_links', 'sortParms'));
    }

    /**
     * @OA\Get(
     *     path="/news/top-headlines",
     *     tags={"News"},
     *     summary="Get top headlines",
     *     description="Returns a paginated list of top headlines",
     *     @OA\Parameter(
     *         name="q",
     *         in="query",
     *         description="The search query",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="source",
     *         in="query",
     *         description="The source of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="country",
     *         in="query",
     *         description="The country of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="category",
     *         in="query",
     *         description="The category of the news article",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="page_size",
     *         in="query",
     *         description="The number of news articles per page",
     *         required=false,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="The current page number",
     *         required=false,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(ref="#/components/schemas/News")
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function indexTopHeadlines(Request $request): View
    {
        $params = $this->getReqParams();

        if($request->category == null && $request->country == null)
        {
            $source = $request->source;
        }

        $topHeadlines = News::paginatedListTopHeadlines(
            $request->q,
            $request->source,
            auth()->user()->country ?? "us",
            $request->category ?? auth()->user()->favourite_category,
            $request->page_size,
            $request->page
        );

        $categories = News::getCategories();

        return view('top-headlines', compact('topHeadlines', 'params', 'categories'));
    }

    /**
     * @OA\Get(
     *     path="/news/dashboard",
     *     tags={"News"},
     *     summary="Get dashboard data",
     *     description="Returns a list of countries, languages and categories",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="countries",
     *                 type="array",
     *                 @OA\Items(type="string")
     *             ),
     *             @OA\Property(
     *                 property="languages",
     *                 type="array",
     *                 @OA\Items(type="string")
     *             ),
     *             @OA\Property(
     *                 property="categories",
     *                 type="array",
     *                 @OA\Items(type="string")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function indexDashboard(News $allHeadlines): View
    {
        $countries = config('constants.countries');
        $languages = config('constants.languages');
        $params = $this->getReqParams();

        $categories = $allHeadlines->getCategories();


        return view('dashboard', compact('countries', 'languages', 'categories', 'params',));
    }

    /**
     * @OA\Get(
     *     path="/news/sources",
     *     tags={"News"},
     *     summary="Get news sources",
     *     description="Returns a list of news sources",
     *     @OA\Parameter(
     *         name="category",
     *         in="query",
     *         description="The category of the news source",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="language",
     *         in="query",
     *         description="The language of the news source",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="country",
     *         in="query",
     *         description="The country of the news source",
     *         required=false,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Not found"
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error"
     *     ),
     * )
     */
    public function indexSources(Request $request, News $allHeadlines): View
    {
        $language = $request->language;
        $country = $request->country;
        $sources = $allHeadlines->getSources($request->category, $request->language, $request->country);

        return view('sources', compact('sources', 'language', 'country'));
    }
}
