export interface DataItem {
  desc: string;
  fileSize: string;
  close: boolean;
  tag: {
    isOpen: boolean;
    tagTitle: string;
    tagColor: string;
  };
}
