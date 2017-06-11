// Use there fetch polyfill
// The main idea is create a helper in order to handle success/error status
//import * as LoginActions from '../actions/LoginActions';
import $ from 'jquery'
const LoginApiCall = {
 login(userData) {
   alert(userData.uname);
   var data = {uname:userData.uname,pwd:userData.password}
   $.ajax({
       type: 'POST',
       url: 'http://cinemas4u.in/api/login.php',
       data: data
     })
     .done(function(data) {
       if(data.status==200)
       {
         return data.redirect('/login');
       }
       console.log(data)
     })
     .fail(function(jqXhr) {
       console.log('failed to register');
     });


 }
};

export default LoginApiCall;
