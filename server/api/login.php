<?php

$app->post('/api/login', function ($request, $response){
   
    require_once 'api/db.php';
    
    $data = array(
        "error" => false
    );
    
    $user = $request->getParsedBody()['username'];
    $pass = $request->getParsedBody()['password'];
    
    $q = "SELECT username, password FROM users WHERE username = ?";
    
    $stmt = $mysqli->prepare($q);
    $stmt->bind_param('s', $user);
    
    if($stmt->execute()){
        
        $stmt->bind_result($username, $password);
        $stmt->store_result();
        
        if($stmt->num_rows() > 0){
            
            $passMatch = false;
            
            while($stmt->fetch()){
                if(password_verify($pass, $password)){
                    $passMatch = true;
                }
            }
            
            if(!$passMatch){
                $data['error'] = true;
                $data['message'] = "Password/Username was incorrect";
            }
            
        }else{
            $data['error'] = true;
            $data['message'] = "A user could not be found with that Username";
        }
        
    }else{
        $data['error'] = true;
        $data['message'] = "Could not run the SQL";
    }
    
    return $response->withJson($data);
});