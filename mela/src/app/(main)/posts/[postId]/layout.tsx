//Bismillahirrahmanirahim 
//Elhamdulillahirabbulalemin 
// Es selatu vesselamu ala rasulina Muhammed'in ve ala alihi ve sahbihi ecmain.
//SuphanAllah ul Azim ve Bihamdihi
//Allah U Ekber velillahilhamd
//La ilahe illAllah u vahdehu la şerike leh,lehul mulku ve lehul hamdu
//Ve huwe ala kulli şey in kadir







import { ReactNode } from "react";
import ChatProviderClient from "../../ChatProviderClient";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ChatProviderClient />
      {children}
      <ChatProviderClient />
    </>
  );
}





