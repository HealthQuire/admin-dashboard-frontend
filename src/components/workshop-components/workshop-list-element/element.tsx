import {ElementWrapper, ElementMain, ElementInteraction, ElementButton} from "./styles.ts";
// import theme from "../../../styles/theme.ts";

import { faPencil } from '@fortawesome/free-solid-svg-icons'

export default function WorkshopListElement(element: [number, string]){

    return(
        <ElementWrapper key={element[0]}>
            <ElementMain>
                <p>{element[0]}</p>
                <p style={{marginLeft: '15px'}}>{element[1]}</p>
            </ElementMain>
            <ElementInteraction>
                <ElementButton icon={faPencil} />
                {/*<ElementButton icon={faTrashCan} style={{color: theme.colors.deleteColor, marginLeft: '15px'}} />*/}
            </ElementInteraction>
        </ElementWrapper>
    )
}
