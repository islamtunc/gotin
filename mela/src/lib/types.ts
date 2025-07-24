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
export const notificationsInclude = {
  issuer: {
    select: {
      username: true,
      displayName: true,
      avatarUrl: true,
    },
  },
  post: {
    select: {
      content: true,
    },
  },
} satisfies Prisma.NotificationInclude;

export type NotificationData = Prisma.NotificationGetPayload<{
  include: typeof notificationsInclude;
}>;

export interface NotificationsPage {
  notifications: NotificationData[];
  nextCursor: string | null;
}

export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}

export interface NotificationCountInfo {
  unreadCount: number;
}

export interface MessageCountInfo {
  unreadCount: number;
}

export function getMmhunerDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.MmhunerInclude;
}

export type MmhunerPostData = Prisma.MmhunerGetPayload<{
  include: ReturnType<typeof getMmhunerDataInclude>;
}>;

export function getMmwesayitDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.MmwesayitInclude;
}

export type MmwesayitPostData = Prisma.MmwesayitGetPayload<{
  include: ReturnType<typeof getMmwesayitDataInclude>;
}>;

// Diğer kategoriler için de aynı şekilde ekleyebilirsiniz:
export function getMmkincDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.MmkincInclude;
}

export type MmkincPostData = Prisma.MmkincGetPayload<{
  include: ReturnType<typeof getMmkincDataInclude>;
}>;

export function getMmhewcedariDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.MmhewcedariInclude;
}

export type MmhewcedariPostData = Prisma.MmhewcedariGetPayload<{
  include: ReturnType<typeof getMmhewcedariDataInclude>;
}>;

export function getMmkedkarDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.MmkedkarInclude;
}

export type MmkedkarPostData = Prisma.MmkedkarGetPayload<{
  include: ReturnType<typeof getMmkedkarDataInclude>;
}>;

export function getMmkargehDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.MmkargehInclude;
}

export type MmkargehPostData = Prisma.MmkargehGetPayload<{
  include: ReturnType<typeof getMmkargehDataInclude>;
}>;

// ... Diğer kategoriler için aynı yapıyı kullanabilirsiniz ...
