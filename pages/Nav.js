import Script from 'next/script'
function Nav() {
 var stripe_Load = () => {
    const li = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");
    function activeMenu() {
        let len= sec.length;
        while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove('active'));
        li[len].classList.add("active")  
    }
    activeMenu();

    window.addEventListener("scroll", activeMenu);  
 }
 stripe_Load()

  return (
      <div>
          
          
    <header>
      
          <div className="container">
              <div className="main-head">
                  <h1>Logo</h1>
                  <nav className="nav">
                <ul>
                    <li className="links"><a href ="#home">home</a></li>
                    <li className="links"><a href ="#about">About</a></li>
                    <li className="links"><a href ="#contact">contact</a></li>
                    <li className="links"><a href ="#footer">footer</a></li>
                </ul>
           </nav>
          </div>
        </div>
    </header>
      
      <section id="home">
          <h1>home</h1>
      </section>
      <section id="about">
          <h1>About</h1>
      </section>
      <section id="contact">
          <h1>contact</h1>
      </section>
      <section id="footer">
          <h1>Footer</h1>
      </section>

          </div>
  );
}

export default Nav;
