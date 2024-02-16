import {
    WSPageWrapper
} from "./styles";

import WorkshopHeader from "../../components/workshop-components/workshop-header";
import WorkshopList from "../../components/workshop-components/workshop-list";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getDataByLocation} from "./getDataByLocation.ts";

export default function Workshop(){

    const location = useLocation()

    const [initialData, setInitialData] = useState<[number, string][]>([]);

    const [data, setData] = useState<[number, string][]>([])

    const [searchRequest, setSearchRequest] = useState('')

    useEffect(() => {
        setInitialData(getDataByLocation(location.pathname.split('/')[1]));
    }, [location]);

    useEffect(() => {
        setData(getDataByLocation(location.pathname.split('/')[1]))
    }, [initialData]);

    useEffect(() => {
        setData(initialData.filter(x => x[1].toLowerCase().includes(searchRequest.toLowerCase())));
    }, [searchRequest]);

    return(
        <WSPageWrapper>
            {WorkshopHeader(searchRequest, setSearchRequest)}
            {WorkshopList(data)}
        </WSPageWrapper>
    )
}
