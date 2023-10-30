import { Label } from "./FindCont.styled";

export const FindCont = ({ onFilter, filterValue }) => {
    return <Label htmlFor="FindName">Find contacts by name
        <input type="text" id="FindName" name="FindName" onChange={evt => onFilter(evt.target.value)} value={filterValue}/>
        </Label>
}