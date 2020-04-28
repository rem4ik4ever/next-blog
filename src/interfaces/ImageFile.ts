import { File } from "./File";
import { Size } from "./Size";

export interface ImageFile extends File {
  name: string;
  filetype: string;
  size: number;
  url: string;
  id?: number;
  createdAt: string;
  sizes?: Map<string, Size>;
}
