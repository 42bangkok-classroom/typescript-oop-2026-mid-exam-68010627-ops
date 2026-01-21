const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

// function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]>

interface FullAlbum {
  userId: number;
  id: number;
  title: string;
  photos: any[];
}

async function mapPhotoToAlbum(userIds?: number[]): Promise<FullAlbum[]> {
  try {
    if (!Array.isArray(userIds) || userIds.length === 0) {
      return [];
    }

    const albumsRes = await fetch(ALBUMS_URL);
    const photosRes = await fetch(PHOTOS_URL);

    const albums = await albumsRes.json();
    const photos = await photosRes.json();

    return albums
      .filter(
        (album: any) =>
          userIds.includes(album.userId)
      )
      .map((album: any) => ({
        ...album,
        photos: photos.filter(
          (photo: any) => photo.albumId === album.id
        )
      }));
  } catch {
    return [];
  }
}