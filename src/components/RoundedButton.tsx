

export interface RoundedButtonProps {
    icon?: string;
    label: string;
    onClick: () => void;
  }
  
export default function RoundedButton(
    { icon, label, onClick,}: RoundedButtonProps = { 
      icon: "",
      label: "",
       onClick: () => {} }
) {
    return (
      <button
        style={{ borderRadius: '10px' }}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {icon && <img src={icon} alt="icon" />}
        {label && <p>{label}</p>}
      </button>
    );
  }
  