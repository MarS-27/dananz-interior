import 'styled-components';
import { ITheme } from '@/models/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}