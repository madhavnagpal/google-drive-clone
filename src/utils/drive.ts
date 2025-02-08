import type { DriveItem } from "~/types/drive";

/**
 * Gets the path from root to the specified folder
 * 
 * @param items - Array of all drive items in the system
 * @param folderId - ID of the target folder to find path to
 * @returns Array of DriveItems representing the path from root to target folder
 * 
 * Example:
 * For structure: Root -> Documents -> Work
 * getItemPath(items, "work_id") returns: 
 * [{ name: "Documents", ... }, { name: "Work", ... }]
 */
export const getItemPath = (items: DriveItem[], folderId: string): DriveItem[] => {
  const path: DriveItem[] = [];
  let current = items.find(item => item.id === folderId);
  
  while (current) {
    path.unshift(current);
    const parentId = current.parentId;
    current = parentId ? items.find(item => item.id === parentId) : undefined;
  }

  return path;
};

/**
 * Gets all immediate children of a folder
 * 
 * @param items - Array of all drive items in the system
 * @param parentId - ID of parent folder (null for root)
 * @returns Array of DriveItems that are direct children of the specified folder
 * 
 * Example:
 * For items in "Documents": [file1.pdf, Work folder, file2.txt]
 * getChildItems(items, "documents_id") returns:
 * [{ name: "file1.pdf", ... }, { name: "Work", ... }, { name: "file2.txt", ... }]
 */
export const getChildItems = (items: DriveItem[], parentId: string | null): DriveItem[] => {
  return items.filter(item => item.parentId === parentId);
}; 