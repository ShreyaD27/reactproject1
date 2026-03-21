import {
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AppContext } from "./app-context";
import type { ImageItem } from "../types";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [username, setUsername] = useState("");
  const [savedImages, setSavedImages] = useState<ImageItem[]>([]);

  const toggleSaveImage = useCallback((image: ImageItem) => {
    setSavedImages((prev) => {
      const exists = prev.some((item) => item.id === image.id);

      if (exists) {
        return prev.filter((item) => item.id !== image.id);
      }

      return [...prev, image];
    });
  }, []);

  const isImageSaved = useCallback(
    (id: string) => {
      return savedImages.some((item) => item.id === id);
    },
    [savedImages]
  );

  const value = useMemo(
    () => ({
      username,
      setUsername,
      savedImages,
      toggleSaveImage,
      isImageSaved,
    }),
    [username, savedImages, toggleSaveImage, isImageSaved]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};