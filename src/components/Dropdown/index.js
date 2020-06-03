import React, {useState} from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './styles.css';

export default ({options, value, onChange}) => {

    const [menuVisible, setMenuVisible] = useState(false);

    const toggle = () => setMenuVisible(prevState => !prevState);

    return (
        <div className='dropdown'>
            <div className={`dropdownToggle ${menuVisible ? 'open': ''}`} onClick={toggle}>
                {value}{" "}<ExpandMoreIcon fontSize="inherit" />
            </div>
            <div className={`expandedMenu ${menuVisible ? 'open': ''}`}>
                {options.map(option => (
                    <div 
                        className='menuOption'
                        onClick={() => {
                            toggle() 
                            onChange(option) 
                        }}
                        key={option}
                    ><p>{option}</p></div>
                ))}
            </div>
        </div>
    )
}