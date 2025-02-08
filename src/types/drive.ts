export interface BaseItem {
  id: string;
  name: string;
  parentId: string | null;
}

export interface DriveFile extends BaseItem {
  type: 'file';
  url: string;
}

export interface DriveFolder extends BaseItem {
  type: 'folder';
}

export type DriveItem = DriveFile | DriveFolder; 