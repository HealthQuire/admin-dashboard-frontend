import {
    WSListWrapper
} from "./styles";

import WorkshopListElement from "../workshop-list-element";

export default function WorkshopList(data: [number, string][]){

    return(
        <WSListWrapper>
            {data.length > 0 ?
                data.map(element =>
                    WorkshopListElement(element)
                )
                : <p>Not Found</p>
            }
        </WSListWrapper>
    )
}
