// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Es-salatu was-salamu 'ala Rasulillah
// Allahu Ekber velillahilhamd
// SubhanAllahi ve bihamdi, SubhanAllahil Azim
// Allahu Ekber, Allahu Ekber, Allahu Ekber,
// La ilahe illallah

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
    // Diğer ilişkili alanlar gerekiyorsa burada belirtilebilir
  } satisfies Prisma.PostInclude;
}

export type PostData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getPostDataInclude>;
}>;

export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

// Bildirimle ilgili tüm tipler kaldırıldı

export interface MessageCountInfo {
  unreadCount: number;
}
