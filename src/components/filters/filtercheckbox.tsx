import { FilterCheckboxProps } from "../../types/types";
import * as s from "./styles.ts";


const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ label, isChecked, onChange }) => {
    return (
        <s.Label>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            <span>{label}</span>
        </s.Label>
    ); 
};

export default FilterCheckbox;
