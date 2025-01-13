import { Toggle } from '@/interfaces/UtilityInterface';

const ExtraLargeModal = ({ onToggle }: Toggle) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="fixed z-50 inset-0 p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full"
    >
      <button onClick={onToggle}></button>
    </div>
  );
};

export default ExtraLargeModal;
