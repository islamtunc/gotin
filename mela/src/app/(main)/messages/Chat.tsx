// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbul Alemin
// Es-salatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";

import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Chat as StreamChat } from "stream-chat-react";
import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";
import useInitializeChatClient from "./useInitializeChatClient";
import { useChatContext } from "stream-chat-react";
import { useSearchParams } from "next/navigation";

export default function Chat() {
  const chatClient = useInitializeChatClient();
  const { resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { client, setActiveChannel } = useChatContext();

  // userId query parametresine göre kanal aç
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  useEffect(() => {
    if (userId && client.userID && userId !== client.userID) {
      const channel = client.channel("messaging", {
        members: [client.userID, userId],
      });
      channel.watch().then(() => setActiveChannel(channel));
    }
  }, [userId, client, setActiveChannel]);

  if (!chatClient) {
    return <Loader2 className="mx-auto my-3 animate-spin" />;
  }

  return (
    <main className="relative w-full overflow-hidden rounded-2xl bg-card shadow-sm">
      <div className="absolute bottom-0 top-0 flex w-full">
        <StreamChat
          client={chatClient}
          theme={
            resolvedTheme === "dark"
              ? "str-chat__theme-dark"
              : "str-chat__theme-light"
          }
        >
          <ChatSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <ChatChannel
            open={!sidebarOpen}
            openSidebar={() => setSidebarOpen(true)}
          />
        </StreamChat>
      </div>
    </main>
  );
}