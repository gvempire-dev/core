import { ThemeVariants } from '../../common/types';

import {
  FaCheckCircle,
  FaInfoCircle,
  FaMinusCircle,
  FaExclamationTriangle,
  FaRocket,
} from 'react-icons/fa';

const variants: ThemeVariants = {
  icons: {
    success: FaCheckCircle,
    error: FaMinusCircle,
    retry: FaRocket,
    pending: FaRocket,
    info: FaInfoCircle,
    warning: FaExclamationTriangle,
  },
};

export default variants;
