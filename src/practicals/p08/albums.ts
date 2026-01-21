const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface FullAlbum {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];
}

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
    const albumRes = await fetch(ALBUMS_URL);
    const photoRes = await fetch(PHOTOS_URL);

    if (!albumRes.ok || !photoRes.ok) {
      return [];
    }

    const albums: FullAlbum[] = await albumRes.json();
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


// export interface Photo {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// }

// export interface FullAlbum {
//   userId: number;
//   id: number;
//   title: string;
//   photos: Photo[];
// }

// export async function mapPhotoToAlbum(userIds?: number[]): Promise<(Album & { photos: Photo[] })[]> {
//   if (!userIds || userIds.length === 0) {
//     return [];
//   }

//   try {
//     const albumsRes = await fetch(ALBUMS_URL);
//     const photosRes = await fetch(PHOTOS_URL);

//     if (!albumsRes.ok || !photosRes.ok) {
//       return [];
//     }

//     const albums: Album[] = await albumsRes.json();
//     const photos: Photo[] = await photosRes.json();

//     // 🔑 filter albums เฉพาะ userIds ที่ส่งมา
//     const filteredAlbums = albums.filter(a =>
//       userIds.includes(a.userId)
//     );

//     // 🔑 map photos เข้า album ทีละอัน
//     return filteredAlbums.map(album => ({
//       ...album,
//       photos: photos.filter(p => p.albumId === album.id),
//     }));
//   } catch {
//     // 🔥 test นี้สำคัญมาก
//     return [];
//   }
// }
