export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface PhotoResponse {
  data: Photo[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
}
