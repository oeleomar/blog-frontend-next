import { MenuPropsLinks } from 'components/Menu';
import { StrapiImage } from './strapiImage';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  menuLink: MenuPropsLinks[];
  text: string;
};
