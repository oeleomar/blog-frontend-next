import { BaseTemplateProps } from '.';
import data from '../../api/dados.json';

export default {
  settings: data.data.setting,
  children: 'Olá mundo',
} as BaseTemplateProps;
