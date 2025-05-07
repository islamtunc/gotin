// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import ForYouFeed from "@/app/(main)/mmkinc/ForYouFeed";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">


<Alert style={{textAlign:"center", fontSize:"55px", background:"green",color:"white"}}> Mobile Apps</Alert>

        <Tabs defaultValue="mm">
          <TabsList>
          <TabsTrigger value="for-you">Android Apps</TabsTrigger>

            <TabsTrigger value="for-you">Ios Apps</TabsTrigger>
            <TabsTrigger value="mm">Cross Platform Apps</TabsTrigger>
            <TabsTrigger value="following">Web Apps</TabsTrigger>

          </TabsList>

          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
