<?php


namespace App\Helpers;
use App\Models\UserLog;


class UserLogHelper
{

    public static function addToLog($subject)
    {
    	$log = [];
    	$log['subject'] = $subject;
    	$log['url'] = request()->fullUrl();
    	$log['method'] = request()->method();
    	$log['ip'] = request()->ip();
    	$log['agent'] = request()->header('user-agent');
    	$log['user_id'] = auth()->check() ? auth()->user()->id : 1;
    	UserLog::create($log);
    }


    public static function userLogLists()
    {
    	return UserLog::latest()->paginate(5);
    }
}
