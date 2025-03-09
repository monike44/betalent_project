export interface Employee{
  id : number;
  name:string;
  job:string;
  admission_date:string;
  phone:string;
  image:string; 
}
export interface FilterCheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}