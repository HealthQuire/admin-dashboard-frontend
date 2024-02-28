import {
    WSPageWrapper
} from "./styles";

import WorkshopHeader from "../../components/workshop-components/workshop-header";
import WorkshopList from "../../components/workshop-components/workshop-list";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getGeneralDataByLocation} from "../../helpers/getGeneralDataByLocation.ts";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import {
    getEntitiesFromSelectorByLocation,
    getEntitiesInitFromSelectorByLocation
} from "../../helpers/getEntitiesFromSelectorByLocation.ts";

const Workshop = () => {

    const dispatch = useDispatch()
    const location = useLocation().pathname.split('/')[1]
    const entities = useTypedSelector(state =>
         getEntitiesFromSelectorByLocation(state, location))
    const entitiesInit = useTypedSelector(state =>
        getEntitiesInitFromSelectorByLocation(state, location))

    const [data, setData] = useState<[number, string][]>([])
    const [searchRequest, setSearchRequest] = useState<string>('')

    useEffect(() => {
        setData(entities.filter(x => x[1].toLowerCase().includes(searchRequest.toLowerCase())));
    }, [searchRequest]);

    useEffect(() => {
        if (!entitiesInit){
            getGeneralDataByLocation(dispatch, location)
        }
        setData(entities)
    }, [dispatch, entities, location]);

    useEffect(() => {
        setSearchRequest("")
    }, [location]);

    return(
        <WSPageWrapper>
            {WorkshopHeader(location, searchRequest, setSearchRequest)}
            {WorkshopList(data, location)}
        </WSPageWrapper>
    )
}

export default Workshop
