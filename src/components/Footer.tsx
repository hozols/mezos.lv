import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-lichen/10 bg-night py-14 px-6">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-5 flex items-start gap-4">
          <Image src="/logo.png" alt="SIA Meži logo" width={72} height={72} className="w-18 h-18 object-contain rounded-full" />
          <div>
            <p className="font-display text-2xl text-bone mb-2">SIA &ldquo;Meži&rdquo;</p>
            <p className="text-mist-2 text-sm leading-relaxed max-w-xs">
              Meža apsaimniekošanas konsultācijas un meža darbu organizēšana.
            </p>
          </div>
        </div>

        <dl className="md:col-span-7 grid sm:grid-cols-3 gap-6 text-sm">
          <div>
            <dt className="text-lichen mb-1">Reģ. nr.</dt>
            <dd className="text-bone/80">40203665488</dd>
          </div>
          <div>
            <dt className="text-lichen mb-1">Konts</dt>
            <dd className="text-bone/80 break-all">LV76RIKO0002930390271</dd>
          </div>
          <div>
            <dt className="text-lichen mb-1">Adrese</dt>
            <dd className="text-bone/80">Gustava Zemgala gatve 67 k-1-40, Rīga, LV-1039</dd>
          </div>
        </dl>
      </div>
      <p className="max-w-7xl mx-auto mt-12 pt-6 border-t border-lichen/10 text-mist-2 text-sm">
        &copy; {new Date().getFullYear()} SIA &ldquo;Meži&rdquo;. Visas tiesības aizsargātas.
      </p>
    </footer>
  );
}
