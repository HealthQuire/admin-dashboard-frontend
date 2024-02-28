import {ElementWrapper, ElementMain, ElementInteraction, ElementButton} from "./styles.ts";
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import {Dispatch, SetStateAction} from "react";

interface IWorkshopListElement {
    element: [number, string];
    trigger: Dispatch<SetStateAction<boolean>>;
    elementTrigger: Dispatch<SetStateAction<[number, string]>>
}

export default function WorkshopListElement({element, trigger, elementTrigger} : IWorkshopListElement){

    const openModal = () => {
        elementTrigger(element);
        trigger(true);
    }

    return(
        <ElementWrapper key={element[0]}>
            <ElementMain>
                <p>{element[0]}</p>
                <p style={{marginLeft: '15px'}}>{element[1]}</p>
            </ElementMain>
            <ElementInteraction>
                <ElementButton onClick={() => openModal()} icon={faPencil} />
            </ElementInteraction>
        </ElementWrapper>
    )
}
