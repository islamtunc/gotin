// Bismillahirrahmanirrahim 

"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect, type CSSProperties } from "react";
import { StreamChat } from "stream-chat";
import { Chat as StreamChatUI, type ChannelProps } from "stream-chat-react";
import ChatChannel from "./ChatChannel";
import ChatSidebar from "./ChatSidebar";
import useInitializeChatClient from "./useInitializeChatClient";

export default function ChatPage(props: any) {
  // keep theme var but prefix to silence unused warning if not used
  const { resolvedTheme: _resolvedTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // guard if chatClient can be null
  const chatClient = useInitializeChatClient();
  if (!chatClient) return null; // avoid passing null to components

  // explicit CSSProperties so TS accepts flexDirection literal
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      {/* pass required props to sidebar */}
      <ChatSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* pass non-null client and required props to channel */}
      <StreamChatUI client={chatClient as StreamChat}>
        <ChatChannel
          open={true}
          openSidebar={() => setSidebarOpen(true)}
        />
      </StreamChatUI>
    </div>
  );
}