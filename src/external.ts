import { Gwen } from './Gwen';
import { extractCritical } from 'emotion-server';

export const gwen = () =>
  new Gwen({
    sansFont: '',
  });

export { Gwen, extractCritical };
