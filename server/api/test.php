<?php

$app->post('/api/test', function ($request, $response){
   
    $data = array(
        "data" => substr(md5(rand()), 0, 8)
    );
    
    return $response->withJson($data);
});