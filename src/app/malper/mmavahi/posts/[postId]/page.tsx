// Bismillahirrahmanirrahim

import Linkify from "@/components/Linkify";
import Post from "@/components/mmavahi/Post";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import UserTooltip from "@/components/UserTooltip";
import prisma from "@/lib/prisma";
import { getPostDataInclude, UserData } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/router"; // Updated import
import { cache, Suspense } from "react";
import { StreamChat } from "stream-chat";

interface PageProps {
  params: { postId: string };
}

const getPost = cache(async (postId: string) => {
  const post = await prisma.mmavahi.findUnique({
    where: {
      id: postId,
    },
    include: getPostDataInclude(""), // Pass an empty string or null if loggedInUserId is not needed
  });

  if (!post) notFound();

  return post;
});

export async function generateMetadata({
  params: { postId },
}: PageProps): Promise<Metadata> {
  const post = await getPost(postId);

  return {
    title: `${post.user.displayName}: ${post.content.slice(0, 50)}...`,
  };
}

export default async function Page({ params: { postId } }: PageProps) {
  const post = await getPost(postId);

  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <Post post={post} />
        <UserInfoSidebar user={post.user} />
      </div>
      <div className="sticky top-[5.25rem] hidden h-fit w-80 flex-none lg:block">
        <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
          <UserInfoSidebar user={post.user} />
        </Suspense>
      </div>
    </main>
  );
}

interface UserInfoSidebarProps {
  user: UserData;
}

function UserInfoSidebar({ user }: UserInfoSidebarProps) {
  const router = useRouter(); // Use useRouter from next/router

  const handleMessageClick = async () => {
    const client = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);
    const channel = client.channel("messaging", {
      members: [user.id],
    });
    await channel.create();
    router.push(`/messages/${channel.id}`); // Use router.push from next/router
  };

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5 ">
      <div className="text-xl font-bold">Bu kullanıcı ile ilgili</div>
      <UserTooltip user={user}>
        <Link
          href={`/users/${user.username}`}
          className="flex items-center gap-3"
        >
          <UserAvatar avatarUrl={user.avatarUrl} className="flex-none" />
          <div>
            <p className="line-clamp-1 break-all font-semibold hover:underline">
              {user.displayName}
            </p>
            <p className="line-clamp-1 break-all text-muted-foreground">
              @{user.username}
            </p>
          </div>
        </Link>
      </UserTooltip>
      <Linkify>
        <div className="line-clamp-6 whitespace-pre-line break-words text-muted-foreground">
          {user.bio}
        </div>
      </Linkify>
      <Button onClick={handleMessageClick}>
        Mesaj Yaz
      </Button>
    </div>
  );
}