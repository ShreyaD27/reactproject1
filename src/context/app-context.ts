import { createContext } from "react";
import type { ImageItem } from "../types";

export type AppContextType = {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  savedImages: ImageItem[];
  toggleSaveImage: (image: ImageItem) => void;
  isImageSaved: (id: string) => boolean;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);