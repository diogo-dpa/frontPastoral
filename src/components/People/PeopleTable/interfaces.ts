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

export type Order = 'asc' | 'desc';

export interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  searchedPersonFlag: boolean;
}
