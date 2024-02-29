import {ElementWrapper, ElementMain, ElementInteraction, ElementButton} from "./styles.ts";
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import {Dispatch, SetStateAction} from "react";
import {IShortEntity} from "../../../@types/shortEntity.ts";

interface IWorkshopListElement {
    element: IShortEntity;
    trigger: Dispatch<SetStateAction<boolean>>;
    elementTrigger: Dispatch<SetStateAction<IShortEntity>>
}

export default function WorkshopListElement({element, trigger, elementTrigger} : IWorkshopListElement){

    const openModal = () => {
        elementTrigger(element);
        trigger(true);
    }

    return(
        <ElementWrapper key={element.id}>
            <ElementMain>
                <p>{element.id}</p>
                <p style={{marginLeft: '15px'}}>{element.name}</p>
            </ElementMain>
            <ElementInteraction>
                <ElementButton onClick={() => openModal()} icon={faPencil} />
            </ElementInteraction>
        </ElementWrapper>
    )
}
