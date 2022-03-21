import React, {useState} from "react";
import { Container } from "./style";
import { Item } from "../../types/Item";
type Props = {
    item: Item;
}
export default function ListItem({ item }: Props) {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <div>
            <Container done={isChecked}>
                <input type="checkbox" name="" id=""
                 checked={isChecked}
                 onChange={e=> setIsChecked(e.target.checked)}
                 />
                <label htmlFor="">{item.name}</label>
            </Container>
        </div>
    )
}