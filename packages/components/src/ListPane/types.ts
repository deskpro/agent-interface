export interface ListItemGroup {
  id: React.Key;
  title: string;
}

export interface ListItem {
  id: React.Key;
  title: string;
  group?: ListItemGroup;
}
