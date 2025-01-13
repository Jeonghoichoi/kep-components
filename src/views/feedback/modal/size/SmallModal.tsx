import { VariousModal } from '@/interfaces/UtilityInterface';
import CommonModal from './CommonModal';

const SmallModal = ({ onToggle }: VariousModal) => {
  const modalName: string = 'isSmallOpen';

  return <CommonModal onToggle={onToggle} modalId={'small-modal'} modalName={modalName} size={'sm'} />;
};

export default SmallModal;
