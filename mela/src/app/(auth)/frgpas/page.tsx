// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Şifre Sıfırlama",
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex flex-col gap-6 rounded-2xl bg-card p-10 shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Şifre Sıfırlama</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="w-full rounded-lg border px-4 py-2"
            required
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2 text-white font-semibold hover:bg-primary/90"
          >
            Sıfırlama Linki Gönder
          </button>
        </form>
        <Link href="/login" className="text-center text-sm text-muted-foreground hover:underline">
          Girişe Dön
        </Link>
      </div>
    </main>
  );
}
