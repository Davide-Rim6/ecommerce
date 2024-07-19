

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
        style={{ borderRadius: '10px' , backgroundColor: 'orange' , borderColor: 'white' }}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {icon && <img src={icon} alt="icon" height={'60px'}/>}
        {label && <p>{label}</p>}
      </button>
    );
  }
  