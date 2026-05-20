import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { toast } from "sonner";
import { destinations } from "./destinations-data";

interface FavoritesContextValue {
  favorites: Set<number>;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  count: number;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Set<number>>(() => new Set());

  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      const wasRemoved = next.has(id);
      if (wasRemoved) {
        next.delete(id);
      } else {
        next.add(id);
      }

      const dest = destinations.find((d) => d.id === id);
      const name = dest?.title ?? "Destination";

      toast.dismiss();

      if (wasRemoved) {
        toast(`Removed ${name} from saved`, {
          duration: 2000,
        });
      } else {
        toast(`Saved ${name}`, {
          duration: 2000,
        });
      }

      return next;
    });
  }, []);

  const isFavorite = useCallback((id: number) => favorites.has(id), [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, count: favorites.size }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}