import { VariousModal } from '@/interfaces/UtilityInterface';
import CommonModal from './CommonModal';

const MiddleModal = ({ onToggle }: VariousModal) => {
  const modalName: string = 'isMiddleOpen';

  return <CommonModal onToggle={onToggle} modalId={'default-modal'} modalName={modalName} size={'md'} />;
};

export default MiddleModal;
