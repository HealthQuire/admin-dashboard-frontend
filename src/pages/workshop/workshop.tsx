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
import {IShortEntity} from "../../@types/shortEntity.ts";

const Workshop = () => {

    const dispatch = useDispatch()
    const location = useLocation().pathname.split('/')[1]
    const entities = useTypedSelector(state =>
         getEntitiesFromSelectorByLocation(state, location))
    const entitiesInit = useTypedSelector(state =>
        getEntitiesInitFromSelectorByLocation(state, location))

    const [data, setData] = useState<IShortEntity[]>([])
    const [searchRequest, setSearchRequest] = useState<string>("")

    useEffect(() => {
        setData(entities.filter(x => x.name.toLowerCase().includes(searchRequest.toLowerCase())));
    }, [entities, searchRequest]);

    useEffect(() => {
        if (!entitiesInit){
            getGeneralDataByLocation(dispatch, location)
        }
        setData(entities)
    }, [entitiesInit, entities, location, dispatch]);

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
