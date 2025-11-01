// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
import React from "react";

export default function page() {
  return (
    <main className="flex-grow container mx-auto py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Hakkımızda — Duvar Takvimi</h1>
        <p className="text-gray-600 mt-2">
          Yıllardır kaliteli baskı ve özgün tasarımlarla duvar takvimi üretiyoruz. Amacımız
          evlere ve ofislere estetik, uzun ömürlü takvimler ulaştırmaktır.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold mb-2">Kalite & Baskı</h3>
          <p className="text-gray-700">
            Profesyonel mat/parlak baskı seçenekleri, kalın ve dayanıklı kâğıtlar. Renk doğruluğu için
            üretim öncesi onay imkanı sağlıyoruz.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold mb-2">Kişiselleştirme</h3>
          <p className="text-gray-700">
            Kendi fotoğraflarınızla kişiselleştirilmiş takvimler veya markanıza özel kurumsal tasarımlar.
            Aylık not alanları ve doğum günü işaretlemeleri eklenebilir.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <h3 className="text-xl font-semibold mb-2">Toplu Sipariş & Kurumsal</h3>
          <p className="text-gray-700">
            Okullar, dernekler ve şirketlere özel fiyatlandırma ve hızlı teslimat. Tasarım desteği ve
            prova gönderimi sunuyoruz.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-3">Nasıl çalışıyoruz?</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Müşteri tasarım veya fotoğraf gönderir.</li>
            <li>Tasarım onayı ve baskı provası yapılır.</li>
            <li>Üretim 3–7 iş günü içinde tamamlanır.</li>
            <li>Kargo ile 2–4 iş günü içinde teslim edilir.</li>
          </ol>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
            alt="Baskı atölyesi"
            className="w-full h-56 object-cover"
          />
        </div>
      </section>

      <section className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3">Müşteri desteği & İletişim</h2>
        <p className="text-gray-700 mb-3">
          Sipariş, tasarım veya kurumsal teklif için bizimle iletişime geçin. Hızlı geri dönüş garantisi.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm text-gray-500">E-posta</div>
            <a className="text-blue-600" href="mailto:satis@duvartakvimi.com">
              satis@duvartakvimi.com
            </a>
          </div>

          <div>
            <div className="text-sm text-gray-500">Telefon</div>
            <a className="text-blue-600" href="tel:+905551112233">
              +90 555 111 22 33
            </a>
          </div>

          <div>
            <a
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow"
              href="/malper/firotana-teqwima/siparis"
            >
              Sipariş Ver / Teklif Al
            </a>
          </div>
        </div>
      </section>

      <footer className="text-sm text-gray-500">
        <p>Adres ve fatura bilgileri için sipariş sırasında info alanını doldurabilirsiniz.</p>
      </footer>
    </main>
  );
}