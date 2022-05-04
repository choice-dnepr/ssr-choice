export interface ImagebbResponse {
  data: ImagebbResponseData;
  success: boolean;
  status: number;
}

export interface ImagebbResponseData {
  id: string;
  title: string;
  url_viewer: string;
  url: string;
  display_url: string;
  width: string;
  height: string;
  size: number;
  time: string;
  expiration: string;
  delete_url: string;
  image: Imagebb;
  medium: Imagebb;
  thumb: Imagebb;
}

export interface Imagebb {
  extension: string;
  filename: string;
  mime: string;
  name: string;
  url: string;
}
