import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--color-forest-200)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="SIA Meži logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-[var(--color-forest-800)]">
              SIA &ldquo;Meži&rdquo;
            </span>
          </a>
          <div className="hidden sm:flex gap-8 text-sm">
            <a
              href="#pakalpojumi"
              className="text-[var(--color-forest-700)] hover:text-[var(--color-forest-900)] transition-colors"
            >
              Pakalpojumi
            </a>
            <a
              href="#process"
              className="text-[var(--color-forest-700)] hover:text-[var(--color-forest-900)] transition-colors"
            >
              Kā strādāju
            </a>
            <a
              href="#cenas"
              className="text-[var(--color-forest-700)] hover:text-[var(--color-forest-900)] transition-colors"
            >
              Cenas
            </a>
            <a
              href="#kontakti"
              className="text-[var(--color-forest-700)] hover:text-[var(--color-forest-900)] transition-colors"
            >
              Kontakti
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-[var(--color-forest-50)] to-white">
        {/* Decorative tree silhouettes */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.04] pointer-events-none">
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-full"
            preserveAspectRatio="xMidYMax slice"
          >
            <path d="M100,600 L130,300 L80,320 L120,150 L70,180 L100,50 L130,180 L80,150 L120,320 L70,300 Z" fill="currentColor" />
            <path d="M250,600 L280,350 L230,370 L270,200 L220,230 L250,80 L280,230 L230,200 L270,370 L220,350 Z" fill="currentColor" />
            <path d="M950,600 L980,320 L930,340 L970,180 L920,210 L950,60 L980,210 L930,180 L970,340 L920,320 Z" fill="currentColor" />
            <path d="M1100,600 L1130,380 L1080,400 L1120,250 L1070,270 L1100,100 L1130,270 L1080,250 L1120,400 L1070,380 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-28 h-28 rounded-full border-4 border-[var(--color-forest-300)] shadow-lg overflow-hidden">
              <Image
                src="/logo.svg"
                alt="SIA Meži logo"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[var(--color-forest-100)] text-[var(--color-forest-700)] text-sm font-medium">
            Meža apsaimniekošana
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-forest-900)] leading-tight mb-6">
            Meža apsaimniekošanas konsultācijas un meža darbu organizēšana
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-forest-700)] mb-8 leading-relaxed max-w-2xl mx-auto">
            Godīgs un saprotams padoms pirms ciršanas un kopšanas.
          </p>
          <p className="text-base text-[var(--color-earth-600)] leading-relaxed max-w-2xl mx-auto">
            SIA &ldquo;Meži&rdquo; nodrošina meža apsaimniekošanas konsultācijas un nepilnu
            700&nbsp;ha meža zemes apsaimniekošanu, ievērojot caurspīdīgus darba principus,
            atklātu informācijas apriti un īpašnieka interešu prioritāti katrā lēmumā.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakti"
              className="inline-block px-8 py-3.5 bg-[var(--color-forest-700)] text-white rounded-lg font-medium hover:bg-[var(--color-forest-800)] transition-colors"
            >
              Sazināties
            </a>
            <a
              href="https://wa.me/37128977533"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1ebe57] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="pakalpojumi" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-forest-900)] mb-4">
              Ko es piedāvāju
            </h2>
            <div className="w-16 h-1 bg-[var(--color-forest-500)] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-2xl border border-[var(--color-forest-100)] hover:border-[var(--color-forest-300)] hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-forest-100)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-forest-200)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-forest-700)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-forest-900)] mb-4">
                Meža apskate un situācijas izvērtējums
              </h3>
              <ul className="space-y-2.5 text-[var(--color-earth-600)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Ko darīt tagad un ko labāk atlikt
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Galveno risku (vējš, sniegs, kaitēkļi, kvalitāte) novērtējums
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Ieteikumi par ciršanas un kopšanas secību
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-2xl border border-[var(--color-forest-100)] hover:border-[var(--color-forest-300)] hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-forest-100)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-forest-200)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-forest-700)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-forest-900)] mb-4">
                Krājas kopšanas ieteikumi un plāns
              </h3>
              <ul className="space-y-2.5 text-[var(--color-earth-600)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Prioritātes 1–3 gadiem
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Ko kopt, lai palielinātu vērtību un pieaugumu
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Praktiski ieteikumi izpildei (darbu apjoms, termiņi, loģika)
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-2xl border border-[var(--color-forest-100)] hover:border-[var(--color-forest-300)] hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-forest-100)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-forest-200)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-forest-700)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-forest-900)] mb-4">
                Sagatavošana ciršanai un procesu skaidrojums
              </h3>
              <ul className="space-y-2.5 text-[var(--color-earth-600)]">
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Kā pareizi sagatavoties darbam, lai nav pārsteigumu
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Kas ir būtiski līgumā un uzskaitē (caurspīdība, sortimenti, uzmērīšana)
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-forest-500)] mt-1 shrink-0">&#8226;</span>
                  Ieteikumi par darbu organizāciju un kontroli
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group p-8 rounded-2xl border border-[var(--color-forest-100)] hover:border-[var(--color-forest-300)] hover:shadow-lg transition-all bg-[var(--color-forest-50)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-forest-200)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-forest-300)] transition-colors">
                <svg className="w-6 h-6 text-[var(--color-forest-700)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-forest-900)] mb-4">
                Sadarbības modelis
              </h3>
              <p className="text-[var(--color-earth-600)] leading-relaxed">
                Ja pēc konsultācijas nolemjat cirst, varu palīdzēt ar darbu organizēšanu vai
                piedāvāt sadarbību. Lēmums vienmēr paliek jūsu ziņā.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-[var(--color-forest-50)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-forest-900)] mb-4">
              Kā es strādāju
            </h2>
            <div className="w-16 h-1 bg-[var(--color-forest-500)] mx-auto rounded-full" />
          </div>

          <div className="space-y-0">
            {/* Step 1 */}
            <div className="relative flex gap-6 pb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-forest-700)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div className="w-0.5 h-full bg-[var(--color-forest-300)] mt-2" />
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-semibold text-[var(--color-forest-900)] mb-2">
                  Īsa sākotnējā saruna
                </h3>
                <p className="text-[var(--color-earth-600)]">
                  10–15 minūtes — īpašuma atrašanās vieta, mērķis un steidzamība.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-6 pb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-forest-700)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div className="w-0.5 h-full bg-[var(--color-forest-300)] mt-2" />
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-semibold text-[var(--color-forest-900)] mb-2">
                  Apskate dabā
                </h3>
                <p className="text-[var(--color-earth-600)]">
                  Mērījumi un meža stāvokļa novērtējums.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-6 pb-12">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-forest-700)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div className="w-0.5 h-full bg-[var(--color-forest-300)] mt-2" />
              </div>
              <div className="pb-2">
                <h3 className="text-lg font-semibold text-[var(--color-forest-900)] mb-2">
                  Kopsavilkums un ieteikumi
                </h3>
                <p className="text-[var(--color-earth-600)]">
                  Skaidri un saprotami formulēti ieteikumi — ko darīt, ko nedarīt un kāpēc.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-forest-700)] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-forest-900)] mb-2">
                  Sarežģītāku jautājumu risināšana
                </h3>
                <p className="text-[var(--color-earth-600)]">
                  Tiek nodrošināta atbilstošas profesionālās kompetences iesaiste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cenas" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-forest-900)] mb-4">
              Cenas
            </h2>
            <p className="text-[var(--color-earth-500)] text-lg">Vienkārši un droši</p>
            <div className="w-16 h-1 bg-[var(--color-forest-500)] mx-auto rounded-full mt-4" />
          </div>

          <div className="p-8 sm:p-10 rounded-2xl border border-[var(--color-forest-200)] bg-[var(--color-forest-50)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h3 className="text-xl font-semibold text-[var(--color-forest-900)]">
                Meža apskate un konsultācija
              </h3>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-forest-200)] text-[var(--color-forest-800)] text-sm font-medium">
                Pēc vienošanās
              </span>
            </div>
            <p className="text-[var(--color-earth-600)] leading-relaxed mb-6">
              Cena atkarīga no atrašanās vietas un apjoma.
            </p>
            <div className="p-5 rounded-xl bg-white border border-[var(--color-forest-100)]">
              <p className="text-[var(--color-forest-800)] font-medium">
                Pirmajai sarunai pietiek ar īsu aprakstu un atrašanās vietu — iedošu skaidru
                piedāvājumu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section
        id="kontakti"
        className="py-20 px-6 bg-[var(--color-forest-800)] text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sazināties</h2>
          <p className="text-[var(--color-forest-200)] text-lg mb-10 leading-relaxed">
            Pastāstiet par savu mežu — atrašanās vietu un situāciju. Atbildēšu ar skaidru
            piedāvājumu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/37128977533"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1ebe57] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+37128977533"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-[var(--color-forest-800)] rounded-lg font-medium hover:bg-[var(--color-forest-100)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +371 2897 7533
            </a>
          </div>
        </div>
      </section>

      {/* Footer with Company Details */}
      <footer className="py-10 px-6 bg-[var(--color-forest-900)] text-[var(--color-forest-400)]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.svg"
                  alt="SIA Meži logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-lg font-semibold text-white">
                  SIA &ldquo;Meži&rdquo;
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Meža apsaimniekošanas konsultācijas un meža darbu organizēšana.
              </p>
            </div>

            {/* Rekvizīti */}
            <div className="text-sm space-y-2">
              <h3 className="text-white font-semibold mb-3">Rekvizīti</h3>
              <p>
                <span className="text-[var(--color-forest-300)]">Reģ. nr.:</span>{" "}
                <span className="text-[var(--color-forest-200)]">40203665488</span>
              </p>
              <p>
                <span className="text-[var(--color-forest-300)]">Konts:</span>{" "}
                <span className="text-[var(--color-forest-200)]">LV76RIKO0002930390271</span>
              </p>
              <p>
                <span className="text-[var(--color-forest-300)]">Adrese:</span>{" "}
                <span className="text-[var(--color-forest-200)]">
                  Gustava Zemgala gatve 67 k-1-40, Rīga, LV-1039
                </span>
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--color-forest-800)] pt-6 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} SIA &ldquo;Meži&rdquo;. Visas tiesības aizsargātas.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/37128977533"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1ebe57] hover:scale-110 transition-all"
        aria-label="Sazināties WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
