import {
    WSPageWrapper
} from "./styles";

import WorkshopHeader from "../../components/workshop-components/workshop-header";
import WorkshopList from "../../components/workshop-components/workshop-list";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getGeneralDataByLocation} from "../../helpers/getGeneralDataByLocation.ts";

const Workshop = () => {

    const location = useLocation()

    const [initialData, setInitialData] = useState<[number, string][]>([]);
    const [data, setData] = useState<[number, string][]>([])
    const [searchRequest, setSearchRequest] = useState('')

    useEffect(() => {
        setInitialData(getGeneralDataByLocation(location.pathname.split('/')[1]))
    }, [location]);

    useEffect(() => {
        setData(initialData)
    }, [initialData]);

    useEffect(() => {
        setData(initialData.filter(x => x[1].toLowerCase().includes(searchRequest.toLowerCase())));
    }, [initialData, searchRequest]);

    return(
        <WSPageWrapper>
            {WorkshopHeader(searchRequest, setSearchRequest)}
            {WorkshopList(data)}
        </WSPageWrapper>
    )
}

export default Workshop
