import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { FilterState } from "./type";

const useFilterStore = create<FilterState>()(
  persist(
    (set) => ({
      filterText: null,
      setFilterText: (text) => set(() => ({ filterText: text })),
    }),
    {
      name: "filterStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFilterStore;
