import { SmartImage } from "@core/models/shared";

export interface PresentSectionResponse {
  mainPhoto: SmartImage;
  photoSet: SmartImage[];
  mainText: string;
}