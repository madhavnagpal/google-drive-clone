import { create } from "zustand";
import type { DriveItem } from "~/types/drive";
import { getItemPath, getChildItems } from "~/utils/drive";

const mockItems: DriveItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    parentId: null,
  },
  {
    id: "2",
    name: "Work",
    type: "folder",
    parentId: "1",
  },
  {
    id: "3",
    name: "Project Proposal.pdf",
    type: "file",
    url: "/files/proposal.pdf",
    parentId: "2",
  },
  {
    id: "4",
    name: "Resume.pdf",
    type: "file",
    url: "/files/resume.pdf",
    parentId: "1",
  },
];

interface DriveState {
  currentFolderId: string | null;
  items: DriveItem[];
  currentPath: DriveItem[];
  navigateToFolder: (folderId: string | null) => void;
  getCurrentItems: () => DriveItem[];
}

export const useDriveStore = create<DriveState>((set, get) => ({
  currentFolderId: null,
  items: mockItems,
  currentPath: [],

  navigateToFolder: (folderId: string | null): void => {
    if (!folderId) {
      set({ currentFolderId: null, currentPath: [] });
      return;
    }

    set({ 
      currentFolderId: folderId, 
      currentPath: getItemPath(get().items, folderId)
    });
  },

  getCurrentItems: () => getChildItems(get().items, get().currentFolderId),
}));
