import {Dispatch, SetStateAction} from "react";
import {InputField} from "./styles.ts";

const ModalField = (name: string, value: string, trigger: Dispatch<SetStateAction<string>>, initValue: string = "") => {

    return(
        <div>
            <p>{"> "}{name}</p>
            <InputField
                type="search"
                value={value}
                onChange={(e) => trigger(e.target.value)}
                placeholder={initValue}
            />
        </div>
    )
}

export default ModalField