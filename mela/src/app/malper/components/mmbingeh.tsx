// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune u Hzreti Muhammed (s.a.v) ji qul u resule Allah e.
import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        {/* Hakkımızda */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Hakkımızda</h5>
          <p>
            Kullanıcılarımıza en iyi hizmetleri ve kaynakları sunmayı hedefliyoruz. Güncellemeler ve haberler için bizimle iletişimde kalın.
          </p>
        </div>

        {/* Hızlı Linkler */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Hızlı Linkler</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/malper" className="text-white">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="/malper/firotana-teqwima" className="text-white">
                Hakkında
              </a>
            </li>
            <li>
              <a href="/malper/hizmetler" className="text-white">
                Hizmetler
              </a>
            </li>
            <li>
              <a href="/login" className="text-white">
                Yönetim
              </a>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Bizi Takip Edin</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://twitter.com" className="text-white" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3">
      © {new Date().getFullYear()} Tüm hakları saklıdır:{" "}
      <a href="https://yekazad.com" className="text-white">
        Yekazad
      </a>
    </div>
  </footer>
);

export default Footer;