// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MmmHome from "./mmerd/mm";
import MmHome from "./mmmal/mm";




export default function MmmmmmHome() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Otomobil</TabsTrigger>
            <TabsTrigger value="following">Arazi , Suv, Pickup</TabsTrigger>
            <TabsTrigger value="for-you">Motosiklet</TabsTrigger>
            <TabsTrigger value="following">Minivan ve Panelvan</TabsTrigger>
            <TabsTrigger value="for-you">Ticari Araçlar</TabsTrigger>
            <TabsTrigger value="following">Elektrikli Araçlar</TabsTrigger>
            
            
            
            
          </TabsList>
         




          <TabsList>
            <TabsTrigger value="for-you">Elektrikli Araçlar</TabsTrigger>
            <TabsTrigger value="following">Deniz Araçları</TabsTrigger>
            <TabsTrigger value="for-you">Hasarlı Araçları</TabsTrigger>
            <TabsTrigger value="following">Karavan</TabsTrigger>
            <TabsTrigger value="for-you">Ticari Araçlar</TabsTrigger>
            <TabsTrigger value="following">Elektrikli Araçlar</TabsTrigger>
            
            
            
            
          </TabsList>

        


          <TabsList>
            <TabsTrigger value="for-you">Klasik Araçlar</TabsTrigger>
            <TabsTrigger value="following">Hava  Araçları</TabsTrigger>
            <TabsTrigger value="for-you">ATV </TabsTrigger>
            <TabsTrigger value="following">UTV</TabsTrigger>
           
            
            
            
          </TabsList>
          <TabsContent value="for-you">
         
         <MmHome/>
          </TabsContent>
          <TabsContent value="following">

<MmmHome/>
          </TabsContent>
    





        <TabsContent value="mm">


    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
