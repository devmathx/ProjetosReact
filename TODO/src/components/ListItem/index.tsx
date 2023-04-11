import { Area, Check } from './styles';

import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item;
}

export default ({ item }: Props) => {

    const [checked, setChecked] = useState<boolean>(item.done);

    return(
        <Area done={checked}> 
            <Check 
            type="checkbox" 
            checked={checked} 
            onChange={(e) => { 
                setChecked(e.target.checked);
                item.done = !checked
            }}/>
            <label>{item.name}</label>
        </Area>
    );
}
