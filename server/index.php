<?php
//gcloud app deploy app.yaml --project dussan-website

syslog(LOG_WARNING, "Request came");
require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
use google\appengine\api\cloud_storage\CloudStorageTools;
//var_dump( $_GET);
$imageName=$_GET["image"];
$size=$_GET["size"];
syslog(LOG_WARNING, "Object URL $object_url");
syslog(LOG_WARNING, "Size $size");
$imageUrl="gs://dussan-website.appspot.com/$imageName";
$resized_image_url = CloudStorageTools::getImageServingUrl($imageUrl,['size' => intval($size), 'crop' => false]);
syslog(LOG_WARNING, "Output Url $resized_image_url");
header("location: $resized_image_url");
closelog();
?>