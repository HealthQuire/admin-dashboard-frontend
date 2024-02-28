import {
    CloseButton,
    ContentContainer,
    ModalHeader,
    ModalWindowWrapper,
    Title,
} from "./styles.ts";
import { ReactNode, SetStateAction, Dispatch } from "react";

import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface IModalWindowProps {
    children: ReactNode;
    isActive: boolean;
    windowName: string;
    trigger: Dispatch<SetStateAction<boolean>>;
}

export const ModalWindow = ({children,
                            isActive,
                            trigger,
                            windowName,
                            }: IModalWindowProps) => {

    const close = () => {
        trigger(false);
    }

    return isActive ? (
        <ModalWindowWrapper>
            <ContentContainer>
                <ModalHeader>
                    <Title>{windowName}</Title>
                    <CloseButton icon={faXmark} onClick={() => close()} />
                </ModalHeader>
                {children}
            </ContentContainer>
        </ModalWindowWrapper>
    ) : null;
};