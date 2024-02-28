import {
    WSListWrapper
} from "./styles";

import WorkshopListElement from "../workshop-list-element";
import {useState} from "react";
import ModalWindow from "../../modal-window";

export default function WorkshopList(data: [number, string][]){

    const [editWindowOpened, setEditWindowOpened] = useState(false);
    const [elementEditOpened, setElementEditOpened] = useState<[number, string]>([0, ""]);

    return(
        <WSListWrapper>
            {data.length > 0 ?
                data.map(element =>
                    WorkshopListElement(
                        {
                        element,
                        trigger: setEditWindowOpened,
                        elementTrigger: setElementEditOpened
                    })
                )
                : <p>Not Found</p>
            }
            <ModalWindow children={<p>Here child</p>} isActive={editWindowOpened}
                         windowName={elementEditOpened[1]} trigger={setEditWindowOpened}></ModalWindow>
        </WSListWrapper>
    )
}
