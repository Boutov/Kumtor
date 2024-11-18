<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Form | Dan Aleko</title>
  <link rel="stylesheet" href="style2.css">
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
</head>
<body>
  <div class="wrapper">
    <form action="login_process.php" method="POST">
      <h1>Login</h1>
      <div class="input-box">
        <input type="text" id="username" name="username" placeholder="Username" required>
        <i class="bx bxs-user"></i>
      </div>
      <div class="input-box">
        <input type="password" id="password" name="password" placeholder="Password" required>
        <i class="bx bxs-lock-alt"></i>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox" name="remember"> Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" class="btn">Login</button>
      <a href="index.html" class="btn back-btn">Back</a>
      <div class="register-link">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>

  <style>
    .back-btn {
      display: inline-block;
      margin-top: 20px; 
      background-color: #ccc; 
      color: #333;
      text-align: center;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
    .back-btn:hover {
      background-color: #aaa; 
    }
  </style>
</body>
</html>
