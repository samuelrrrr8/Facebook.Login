<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Demo Social</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Helvetica, Arial, sans-serif;
}

body{
  background:#fff;
}

.container{
  max-width:420px;
  margin:auto;
  padding:20px;
  min-height:100vh;
  position:relative;
}

.hidden{
  display:none;
}

.top{
  display:flex;
  justify-content:center;
  margin-top:10px;
}

select{
  border:none;
  font-size:16px;
  color:#65676b;
  background:none;
}

.logo{
  display:flex;
  justify-content:center;
  margin:40px 0;
}

.logo img{
  width:60px;
}

input{
  width:100%;
  padding:15px;
  margin-top:12px;
  border-radius:10px;
  border:1px solid #ddd;
  font-size:16px;
  background:#f5f6f7;
}

/* 👇 NUEVO: estilo del error */
.error{
  color:#d93025;
  font-size:13px;
  margin-top:8px;
  display:none;
}

button{
  width:100%;
  margin-top:16px;
  padding:14px;
  border:none;
  border-radius:25px;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
}

.login{
  background:#1877f2;
  color:white;
}

.create{
  margin-top:80px;
  background:white;
  color:#1877f2;
  border:1.5px solid #1877f2;
}

.forgot{
  text-align:center;
  margin-top:18px;
  color:#1877f2;
  font-size:14px;
  cursor:pointer;
}

.meta{
  margin-top:20px;
  text-align:center;
  color:#8a8d91;
  font-size:14px;
}
</style>
</head>

<body>

<div class="container">

  <div class="top">
    <select onchange="changeLang(this.value)" id="langSelect">
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="pt">Português</option>
      <option value="fr">Français</option>
    </select>
  </div>

  <div class="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png">
  </div>

  <input id="user" placeholder="">
  <input id="pass" type="password" placeholder="">

  <!-- 👇 NUEVO mensaje de error -->
  <div class="error" id="errorMsg">
    La contraseña que ingresaste es incorrecta.
  </div>

  <!-- 👇 agregamos onclick -->
  <button class="login" id="loginBtn" onclick="login()"></button>

  <div class="forgot" id="forgotText"></div>

  <button class="create" id="createBtn"></button>

  <div class="meta">∞ Meta</div>

</div>

<script>
const translations = {
  es:{
    user:"Celular o correo electrónico",
    pass:"Contraseña",
    login:"Iniciar sesión",
    forgot:"¿Olvidaste tu contraseña?",
    create:"Crear cuenta nueva"
  },
  en:{
    user:"Mobile number or email",
    pass:"Password",
    login:"Log In",
    forgot:"Forgot password?",
    create:"Create new account"
  },
  pt:{
    user:"Celular ou e-mail",
    pass:"Senha",
    login:"Entrar",
    forgot:"Esqueceu a senha?",
    create:"Criar nova conta"
  },
  fr:{
    user:"Numéro de mobile ou e-mail",
    pass:"Mot de passe",
    login:"Se connecter",
    forgot:"Mot de passe oublié ?",
    create:"Créer un compte"
  }
};

function changeLang(lang){
  localStorage.setItem("lang",lang);
  applyLang(lang);
}

function applyLang(lang){
  const t = translations[lang];
  user.placeholder = t.user;
  pass.placeholder = t.pass;
  loginBtn.innerText = t.login;
  forgotText.innerText = t.forgot;
  createBtn.innerText = t.create;
}

let savedLang = localStorage.getItem("lang") || "es";
langSelect.value = savedLang;
applyLang(savedLang);

/* 👇 NUEVA función */
function login(){
  const error = document.getElementById("errorMsg");
  error.style.display = "block";
}
</script>

</body>
</html>
