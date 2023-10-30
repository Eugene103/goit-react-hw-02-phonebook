import { Container, Item, List, Btn} from "./ContactsList.styled";


export const ContactsList = ({ arr,onDell }) => {
    return <Container>
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