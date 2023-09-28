<?php

namespace App\Models;

use App\Traits\UUID;
use jcobhams\NewsApi\NewsApi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *     schema="News",
 *     type="object",
 *     title="News",
 *     description="A news article model",
 *     @OA\Property(property="id", type="UUID", example="029ee764-4177-4f54-8ee7-f1a348fdcdb7"),
 *     @OA\Property(property="title", type="string", example="Breaking news: ..."),
 *     @OA\Property(property="description", type="string", example="A brief summary of the news article"),
 *     @OA\Property(property="newsURL", type="string", format="url", example="https://example.com/news/1"),
 *     @OA\Property(property="imageURL", type="string", format="url", example="https://example.com/images/1.jpg"),
 *     @OA\Property(property="created_at", type="string", format="date-time", example="2021-12-31T23:59:59Z"),
 *     @OA\Property(property="updated_at", type="string", format="date-time", example="2021-12-31T23:59:59Z")
 * )
 */
class News extends Model
{
    use HasFactory, UUID;

    protected $fillable = [
        'title',
        'description',
        'newsURL',
        'imageURL',
    ];

    /**
     * Search for top headlines.
     *
     * @param $q : Keywords or a phrase to search for.

     * @param $sources: A comma-separated string of identifiers for the news sources or blogs you want headlines from.
     * Use the getSources() method to locate these programmatically or look at the sources index.
     * Note: you can't mix this param with the country or category params.

     * @param $country: The 2-letter ISO 3166-1 code of the country you want to get headlines for.
     * Use the getCountries() method to locate these programmatically.
     * Note: you can't mix this param with the sources param.
     *
     * @param $category: The category you want to get headlines for. Use the getCategories() method to locate these programmatically. Note: you can't mix this param with the sources param.
     *
     * @param $page_size: The number of results to return per page (request). 20 is the default, 100 is the maximum.
     *
     * @param $page: The number of results to return per page (request). 20 is the default, 100 is the maximum.
     *
     * @return array of $articles
     */
    public static function paginatedListTopHeadlines($q, $sources, $country, $category, $page_size, $page)
    {
        $newsApi = new NewsAPI(env('NEWS_API_KEY'));
        $topHeadlines = $newsApi->getTopHeadlines(
            $q,
            $sources,
            $country,
            $category,
            $page_size ?? 6,
            $page,
        );

        return $topHeadlines;
    }

    /**
     * Function for getting all headlines.

     * @param $q : Keywords or a phrase to search for.

     * @param $sources: A comma-separated string of identifiers for the news sources or blogs you want headlines from.
     * Use the getSources() method to locate these programmatically or look at the sources index.
     * Note: you can't mix this param with the country or category params.

     * @param $domains: A comma-separated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.

     * @param $exclude_domains: A comma-separated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.

     * @param $from: A date and optional time for the oldest article allowed.
     * This should be in ISO 8601 format (e.g. 2018-11-16 or 2018-11-16T16:19:03)
     * Default: the oldest according to your plan.

     * @param $to: A date and optional time for the newest article allowed.
     * This should be in ISO 8601 format (e.g. 2018-11-16 or 2018-11-16T16:19:03)
     * Default: the newest according to your plan.

     * @param $language: The 2-letter ISO-639-1 code of the language you want to get headlines for.
     * Possible options: ar de en es fr he it nl no pt ru se ud zh .
     * Default: all languages returned. Use the getLanguages() method to locate these programmatically.

     * @param $sort_by: The order to sort the articles in. Use the getSortBy() method to locate these programmatically.

     * @param $page_size: The number of results to return per page (request). 20 is the default, 100 is the maximum.

     * @param $page: The number of results to return per page (request). 20 is the default, 100 is the maximum.

     * @return array of $articles
     */
    public static function paginatedListAllNews($q, $sources, $domains, $exclude_domains, $from, $to, $language, $sort_by,  $page_size, $page)
    {
        $newsApi = new NewsAPI(env('NEWS_API_KEY'));
        $all_headlines = $newsApi->getEverything(
            $q ?? "news",
            $sources,
            $domains,
            $exclude_domains,
            $from,
            $to,
            $language,
            $sort_by,
            $page_size ?? 6,
            $page ?? 1,
        );

        $articles = $all_headlines;

        return $articles;
    }

    public static function getCategories()
    {
        $newsApi = new NewsApi(env('NEWS_API_KEY'));
        $categories = $newsApi->getCategories();

        return $categories;
    }

    public static function getSortBy()
    {
        $newsApi = new NewsApi(env('NEWS_API_KEY'));
        $sortBy = $newsApi->getSortBy();

        return $sortBy;
    }

    public static function getSources($category, $language, $country)
    {
        $newsApi = new NewsApi(env('NEWS_API_KEY'));
        $sourcesWithStatus = $newsApi->getSources($category, $language, $country);
        $sources = $sourcesWithStatus->sources;

        return $sources;
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}