const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

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

export async function mapPhotoToAlbum(userIds?: number[]): Promise<(Album & { photos: Photo[] })[]> {
  if (!userIds || userIds.length === 0) {
    return [];
  }

  try {
    const albumsRes = await fetch(ALBUMS_URL);
    const photosRes = await fetch(PHOTOS_URL);

    if (!albumsRes.ok || !photosRes.ok) {
      return [];
    }

    const albums: Album[] = await albumsRes.json();
    const photos: Photo[] = await photosRes.json();

    // 🔑 filter albums เฉพาะ userIds ที่ส่งมา
    const filteredAlbums = albums.filter(a =>
      userIds.includes(a.userId)
    );

    // 🔑 map photos เข้า album ทีละอัน
    return filteredAlbums.map(album => ({
      ...album,
      photos: photos.filter(p => p.albumId === album.id),
    }));
  } catch {
    // 🔥 test นี้สำคัญมาก
    return [];
  }
}
