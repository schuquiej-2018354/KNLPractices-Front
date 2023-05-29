import React from 'react'

export const HomePage = () => {
  return (
    <>
      <div class="limiter">
        <div class="container-login100" style="background-image: url('images/bg-01.jpg');">
          <div class="wrap-login100 p-t-30 p-b-50">
            <span class="login100-form-title p-b-41">
              Account Login
            </span>
            <form class="login100-form validate-form p-b-33 p-t-5">
              <div class="wrap-input100 validate-input" data-validate="Enter username">
                <input class="input100" type="text" name="username" placeholder="User name"/>
                  <span class="focus-input100" data-placeholder=""></span>
              </div>
              <div class="wrap-input100 validate-input" data-validate="Enter password">
                <input class="input100" type="password" name="pass" placeholder="Password"/>
                  <span class="focus-input100" data-placeholder=""></span>
              </div>
              <div class="container-login100-form-btn m-t-32">
                <button class="login100-form-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1"></div>

      <script src="vendor/jquery/jquery-3.2.1.min.js"></script>

      <script src="vendor/animsition/js/animsition.min.js"></script>

      <script src="vendor/bootstrap/js/popper.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

      <script src="vendor/select2/select2.min.js"></script>

      <script src="vendor/daterangepicker/moment.min.js"></script>
      <script src="vendor/daterangepicker/daterangepicker.js"></script>

      <script src="vendor/countdowntime/countdowntime.js"></script>

      <script src="js/main.js"></script>

      <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
      <script>
        window.dataLayer = window.dataLayer || []
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-23581568-13');
      </script>
      <script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/v52afc6f149f6479b8c77fa569edb01181681764108816" integrity="sha512-jGCTpDpBAYDGNYR5ztKt4BQPGef1P0giN6ZGVUi835kFF88FOmmn8jBQWNgrNd8g/Yu421NdgWhwQoaOPFflDw==" data-cf-beacon="{&quot;rayId&quot;:&quot;7cef29ad9beeda0f&quot;,&quot;token&quot;:&quot;cd0b4b3a733644fc843ef0b185f98241&quot;,&quot;version&quot;:&quot;2023.4.0&quot;,&quot;si&quot;:100}" crossorigin="anonymous"></script>


    </>
  )
}
