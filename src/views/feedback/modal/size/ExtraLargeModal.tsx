import { VariousModal } from '@/interfaces/UtilityInterface';
import CommonModal from './CommonModal';

const ExtraLargeModal = ({ onToggle }: VariousModal) => {
  const modalName: string = 'isExtraLargeOpen';

  return <CommonModal onToggle={onToggle} modalId={'extraLarge-modal'} modalName={modalName} size={'xl'} />;
};

export default ExtraLargeModal;
