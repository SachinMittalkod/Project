import logo from './logo.svg';
import './App.css';


function App() {
  return (
   <div>
<script>
function redirect()
     {
         window.location="index.html"
     }


</script>

    <form class="Container" action="index.html" method="get" />
        <p>User Name</p>
        <input type="text" placeholder="Enter user Name" />
        
        <p>Password</p>
        <input type="password" placeholder="Enter Your Password" />
        <br/>
        <input id="button" type="submit" value="Login" onclick="redirect()" />
        <div class="center">
            <h1><b> Welcome to our GYM!!!</b> </h1>
        </div>
   </div>
  );
}

export default App;
