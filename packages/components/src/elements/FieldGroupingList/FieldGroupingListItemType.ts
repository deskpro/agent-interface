export interface FieldGroupingListItemType {
  id: React.Key;
  title: string;
  type: string;
  count: number;
  children?: FieldGroupingListItemType[];
}
