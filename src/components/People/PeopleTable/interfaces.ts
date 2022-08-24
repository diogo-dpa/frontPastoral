export interface TableData {
  birthDate: string;
  birthCity: string;
  createdAt: string;
  name: string;
  userInfo?: null;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
}

export interface EnhancedTableToolbarProps {
  searchedPersonFlag: boolean;
}
