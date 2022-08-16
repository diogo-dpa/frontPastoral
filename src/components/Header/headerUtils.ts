import AccessibilityIcon from '@mui/icons-material/Accessibility';
import GroupIcon from '@mui/icons-material/Group';

export interface OptionsType {
  label: string;
  icon: any;
  urlLink: string;
}

export const headerOptions: OptionsType[] = [
  {
    label: 'Atendimentos',
    icon: AccessibilityIcon,
    urlLink: '/atendimentos'
  },
  {
    label: 'Pessoas',
    icon: GroupIcon,
    urlLink: '/pessoas'
  }
];

export function formatUsernameFromUserData(username: string | null) {
  if (!username) return '';
  return username.slice(0, 1).toUpperCase();
}
