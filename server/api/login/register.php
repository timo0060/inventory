<?php

$app->post('/api/register', function ($request, $response){
   
    require_once 'api/db.php';
    
    $data = array(
        "error" => false
    );
    
    $newUser = array(
        "username" => $request->getParsedBody()['username'],
        "name" => $request->getParsedBody()['name'],
        "email" => $request->getParsedBody()['email'],
        "password" => $request->getParsedBody()['password'],
        "repass" => $request->getParsedBody()['repass'],
        "userid" => substr(md5(rand()), 0, 8)
    );
    
    $q = "SELECT * FROM users WHERE username = ?";
    $stmt = $mysqli->prepare($q);
    $stmt->bind_param('s', $newUser['username']);
    if($stmt->execute()){
        $stmt->store_result();
        if($stmt->num_rows() > 0){
            
            $data['error'] = true;
            $data['message'] = "Username is already in use. Please select a different username and try again";
            
        }else{
            $q = "SELECT * FROM users WHERE userid = ?";
    
            $stmt = $mysqli->prepare($q);
            $stmt->bind_param('s', $newUser['userid']);

            if($stmt->execute()){
                $stmt->store_result();

                while($stmt->num_rows() > 0){

                    $newUser['userid'] = substr(md5(rand()), 0, 8);

                    $stmt = $mysqli->prepare($q);
                    $stmt->bind_param('s', $newUser['userid']);
                    $stmt->execute();
                    $stmt->store_results();
                }

                if($newUser['password'] === $newUser['repass']){
                    $_token = uniqid(md5($name . $userid . $password)) . uniqid(md5($userid . $name . $password)) . uniqid(md5($password . $name . $userid));
                    $newUser['password'] = password_hash($newUser['password'], PASSWORD_DEFAULT);

                    $q = "INSERT INTO `users`(userid, username, name, email, password, _token) VALUES (?,?,?,?,?,?)";

                    $stmt = $mysqli->prepare($q);
                    $stmt->bind_param('sssss', $newUser['userid'], $newUser['username'], $newUser['name'], $newUser['email'], $newUser['password'], $_token);

                    if(!$stmt->execute()){
                        $data['error'] = true;
                        $data['message'] = "Could not Execute SQL";
                    }else{
                        $data['name'] = $newUser['name'];
                        $data['userid'] = $newUser['userid'];
                        $data['_token'] = $_token;
                    }

                }else{
                    $data['error'] = true;
                    $data['message'] = "The Passwords do not match. Please try again";
                }


            }else{
                $data['error'] = true;
                $data['message'] = "Could not Execute SQL";
            }
        }
    }else{
        $data['error'] = true;
        $data['message'] = "Could not Execute SQL";
    }
    
    $mysqli->close();
    return $response->withJson($data);
});