import ListItem from './list-item';
import items from './items';

export default function List(props) {
    return (
        <ul style={{ 
            flexDirection: 'row', 
            display: 'flex', 
            listStyleType: 'none', 
            justifyContent: 'flex-start',
            flexWrap: 'wrap'
        }}>
            {items.map((item) => {
                const updateDisplay = () => props.updateInfo(item); 
                return <ListItem onClick={updateDisplay} key={item.name} item={item}></ListItem>
            })}
        </ul>
    );
}