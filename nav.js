var html = 
  '<nav class="main-nav">\
    <div class="logo-img">\
      <span class="logo">\
      <a href="https://omandiabetes.org/?lang=en"><img src="/images/oman_logo.png" alt="Oman Diabetes Logo" class="img"/></a>\
      </span>\
    </div>\
    <div class="nav-contain">\
      <div class="nav-btn">\
        <button class="bt bt1">Be a Member</button>\
        <button class="bt bt2">Donate to ODA</button>\
      </div>\
      <div class="navbar-content">\
        <ul class="navbar">\
          <li><a href="index.html">Home</a></li>\
          <li><a href="register.html">Register</a></li>\
          <li>\
            <a href="">About ODA</a>\
            <ul class="dropdown">\
              <li><a href="https://omandiabetes.org/?page_id=1359&lang=en">Association Chairperson Word</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1390&lang=en">Vision and Mission</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=2574&lang=en">Members</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1691&lang=en">Gallery</a></li>\
            </ul>\
          </li>\
          <li>\
            <a href="pages/diabetes_facts.html">Diabetes Facts</a>\
            <ul class="dropdown">\
              <li>\
                <a href="./pages/patients.html">Patients</a>\
                <ul class="submenu">\
                  <li><a href="/pages/patients/how_to.html">How to get diabetes?</a></li>\
                  <li><a href="/pages/patients/diabetes_types.html">Types of Diabetes</a></li>\
                  <li><a href="/pages/patients/signs_and_symptoms.html">Signs and symptoms of diabetes</a></li>\
                  <li><a href="/pages/patients/why_it_matters.html">Why does diabetes matter?</a></li>\
                  <li><a href="/pages/patients/prediabetes.html">Prediabetes</a></li>\
                  <li><a href="/pages/patients/differences.html">How to differentiate between normal, prediabetes, and diabetes</a></li>\
                  <li><a href="/pages/patients/who_test.html">Who should be tested for prediabetes and diabetes</a></li>\
                  <li><a href="/pages/patients/monitoring.html">Home Monitoring</a></li>\
                </ul>\
              </li>\
              <li>\
                <a href="/pages/professionals/professionals.html">Professionals</a>\
                <ul class="submenu">\
                  <li><a href="/pages/professionals/guidelines.html">Diabetes Guidelines</a></li>\
                  <li><a href="/pages/professionals/studies.html">National Studies</a></li>\
                  <li><a href="/pages/professionals/useful.html">Useful Links</a></li>\
                  <li><a href="/pages/professionals/conferences.html">Conferences</a></li>\
                </ul>\
              </li>\
            </ul>\
          </li>\
          <li>\
            <a href="pages/news.html">News</a>\
            <ul class="dropdown">\
              <li><a href="https://omandiabetes.org/?page_id=1719&lang=en">Upcoming Events</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1852&lang=en">Events archive</a></li>\
            </ul>\
          </li>\
          <li>\
            <a href="pages/patient_edu.html">Patient Education</a>\
            <ul class="dropdown">\
              <li><a href="#">Exercises</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1883&lang=en">Nutrition</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1654&lang=en">Low Blood Sugar</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1658&lang=en">Fasting</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1657&lang=en">Hajj</a></li>\
              <li><a href="https://omandiabetes.org/?page_id=1446&lang=en">Get Sick</a></li>\
            </ul>\
          </li>\
          <li><a href="pages/why_join.html">Why join the ODA?</a></li>\
          <li><a href="pages/faq.html">FAQ</a></li>\
          <li><a href="pages/contact.html">Contact Us</a></li>\
        </ul>\
      </div>\
      <div class="navbar-toggle">\
        <i class="fas fa-bars" onclick="./script.js"></i>\
      </div>\
    </div>\
  </nav>';
  
document.getElementById('nav').innerHTML = html;