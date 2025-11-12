//Bismillahirrahmanirahim 
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim



import { Prisma } from "@prisma/client";

/**
 * Keep these shapes small and independent from the generated Prisma helpers.
 * This avoids TS errors when Prisma client/types are out-of-sync.
 */

export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
    followers: {
      where: {
        followerId: loggedInUserId,
      },
      select: {
        followerId: true,
      },
    },
    _count: {
      select: {
        posts: true,
        followers: true,
      },
    },
  };
}

export type UserData = {
  id: string;
  username: string;
  displayName?: string | null;
  avatarUrl?: string | null;
  bio?: string | null;
  createdAt: string | Date;
  followers?: { followerId: string }[];
  _count?: {
    posts?: number;
    followers?: number;
    [k: string]: number | undefined;
  };
};

export function getPostDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
    likes: {
      where: {
        userId: loggedInUserId,
      },
      select: {
        userId: true,
      },
    },
    bookmarks: {
      where: {
        userId: loggedInUserId,
      },
      select: {
        userId: true,
      },
    },
    _count: {
      select: {
        likes: true,
        comments: true,
      },
    },
  };
}

export type PostData = {
  id: string | number;
  content?: string | null;
  user?: Partial<UserData>;
  attachments?: any[];
  likes?: { userId: string }[];
  bookmarks?: { userId: string }[];
  _count?: {
    likes?: number;
    comments?: number;
    [k: string]: number | undefined;
  };
  [k: string]: any;
};

export function getCommentDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
  };
}

export type CommentData = {
  id: string | number;
  content?: string | null;
  user?: Partial<UserData>;
  createdAt?: string | Date;
  [k: string]: any;
};

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
};

export type NotificationData = {
  id: string | number;
  type?: string | null;
  issuer?: {
    username?: string | null;
    displayName?: string | null;
    avatarUrl?: string | null;
  } | null;
  post?: {
    content?: string | null;
  } | null;
  isRead?: boolean;
  createdAt?: string | Date;
  [k: string]: any;
};

export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

export interface CommentsPage {
  comments: CommentData[];
  previousCursor: string | null;
}

export interface NotificationsPage {
  notifications: NotificationData[];
  nextCursor: string | null;
}

export interface FollowerInfo {
  followers: number;
  isFollowedByUser: boolean;
}

export interface LikeInfo {
  likes: number;
  isLikedByUser: boolean;
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
