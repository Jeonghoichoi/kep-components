import { VariousModal } from '@/interfaces/UtilityInterface';
import CommonModal from './CommonModal';

const FullPageModal = ({ onToggle }: VariousModal) => {
  const modalName: string = 'isFullPageOpen';
  return <CommonModal onToggle={onToggle} modalId={'fullpage-modal'} modalName={modalName} size={'full'} />;
};

export default FullPageModal;
