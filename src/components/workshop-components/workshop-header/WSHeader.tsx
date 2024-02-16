import {
    WSHeaderWrapper,
    InputField,
    CreateButton
} from "./styles.ts";
import {Dispatch, SetStateAction} from "react";

export default function WorkshopHeader(request: string, setRequest: Dispatch<SetStateAction<string>>){

    return(
        <WSHeaderWrapper>
            <InputField
                        type="text"
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        placeholder='Search for entity name'
            />
            <CreateButton>Create</CreateButton>
        </WSHeaderWrapper>
    )
}
