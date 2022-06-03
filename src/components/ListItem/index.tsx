import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item
}

export const ListItem = ({item} : Props) => {
  return (
    <C.Container>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label> { item.name } </label>
    </C.Container>
  );
}