import {InputField} from "./styles.ts";
import { RefObject} from "react";

const ModalField = (name: string, inputRef: RefObject<HTMLInputElement>, initValue: string = "") => {

    return(
        <div>
            <p>{"> "}{name}</p>
            <InputField
                type="search"
                ref={inputRef}
                placeholder={initValue}
            />
        </div>
    )
}

export default ModalField