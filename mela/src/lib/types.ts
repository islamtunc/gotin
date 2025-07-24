// Bismillahirahmanirahim
// Elhamdulillahi Rabbil Alamin
// Es-salatu was-salamu 'ala Rasulillah
// Allah u Ekber velillahilhamd
// SubhanAllahi ve bihamdi, SubhanAllahil Azim
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah



import { Prisma } from "@prisma/client";

export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
    whatsapp: true,
    contact: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  bio: string | null;
  createdAt: Date;
  whatsapp?: string | null;
  contact?: string | null;
};

export function getPostDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    // Ek alanlar doğrudan modelde olduğu için eklemeye gerek yok
  } satisfies Prisma.MmavahiInclude;
}

export type PostData = Prisma.MmavahiGetPayload<{
  include: ReturnType<typeof getPostDataInclude>;
}>;


export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

// Bildirim ile ilgili tüm tipleri kaldırın:
// export const notificationsInclude = { ... }
// export type NotificationData = Prisma.NotificationGetPayload<{ ... }>;
// export interface NotificationsPage { ... }
// export interface NotificationCountInfo { ... }

export interface MessageCountInfo {
  unreadCount: number;
}


