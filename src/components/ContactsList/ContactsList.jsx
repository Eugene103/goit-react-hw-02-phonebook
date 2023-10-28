import { Container, FindCont, Item, List, Btn} from "./ContactsList.styled";


export const ContactsList = ({ arr, onFilter, onDell }) => {
    return <Container>
        <FindCont htmlFor="FindName">Find contacts by name
        <input type="text" id="FindName" name="FindName" onChange={evt => onFilter(evt.target.value)}/>
        </FindCont>
        
        <List>
            {arr.map(({id, Name, Number}) => (
                <Item key={id}>
                    <p>{Name}:</p><p>{Number}</p>
                <Btn id={id} onClick={evt => onDell(id)}>Delete</Btn>
                </Item>
                
            ))}
    </List>
    </Container>
}