// 

import { FullAlbum } from "./albums";

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export async function mapPhotoToAlbum(
  userIds?: number[]
): Promise<FullAlbum[]> {
  // 🔥 เช็ก userIds ให้ strict มาก
  if (
    !Array.isArray(userIds) ||
    userIds.length === 0 ||
    !userIds.every(id => typeof id === "number")
  ) {
    return [];
  }

  try {
    const albumRes = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const photoRes = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );

    if (!albumRes.ok || !photoRes.ok) {
      return [];
    }

    const albums: Album[] = await albumRes.json();
    const photos: Photo[] = await photoRes.json();

    const filteredAlbums = albums.filter(a =>
      userIds.includes(a.userId)
    );

    if (filteredAlbums.length === 0) {
      return [];
    }

    return filteredAlbums.map(album => ({
      userId: album.userId,
      id: album.id,
      title: album.title,
      photos: photos.filter(p => p.albumId === album.id),
    }));
  } catch {
    return [];
  }
}
