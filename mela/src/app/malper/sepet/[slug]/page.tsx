// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin 
// Elhamdulillahirabbulalemin
export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/mmselik/${params.slug}`);
  const selik = await res.json();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{selik.title}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {selik.products.map((p) => (
          <div key={p.id} className="border p-3 rounded-xl">
            <img src={p.imageUrl} className="w-full h-40 object-cover rounded" />
            <h2 className="mt-2 font-semibold">{p.name}</h2>
            <span className="text-sm">{p.price} TL</span>
          </div>
        ))}
      </div>
    </div>
  );
}



// Subhanallah, Elhamdulillah, Allahu Ekber, 
// La ilahe illallah, Muhammeden Abduhu ve Resuluhu
// La havle vela kuvvete illa billahil aliyyil azim
// Allahu Ekber, Allahumma salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// LA ILAHE ILLALLAH 
// Estağfirulllah El-Azim
// Elhmadulillah Elhamdulillah Elhamdulillah
// Elhamdulillahirabbulalemin
// Allahu Ekber, Allahu Ekber, La ilahe illallah
// Estağfirullah El-Azim
// Allahu Ekber ve lillahi'l-hamd