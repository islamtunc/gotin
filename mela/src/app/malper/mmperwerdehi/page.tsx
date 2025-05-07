// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import ForYouFeed from "./ForYouFeed";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">


       <Alert>Courses</Alert>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Web </TabsTrigger>
            <TabsTrigger value="following">AI-ml</TabsTrigger>
            <TabsTrigger value="mm">Android</TabsTrigger>

            <TabsTrigger value="mm">Linux</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">

            <ForYouFeed/>
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
