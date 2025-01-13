import { VariousModal } from '@/interfaces/UtilityInterface';
import CommonModal from './CommonModal';

const LargeModal = ({ onToggle }: VariousModal) => {
  const modalName: string = 'isLargeOpen';

  return <CommonModal onToggle={onToggle} modalId={'large-modal'} modalName={modalName} size={'lg'} />;
};

export default LargeModal;
