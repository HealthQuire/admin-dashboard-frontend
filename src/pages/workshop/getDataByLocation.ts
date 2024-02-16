export const getDataByLocation = (location: string) : [number, string][]  => {
    switch (location){
        case "organizations":
            return [[1, "HealthQuired"], [2, "MedHouse"], [3, "GoAndHeal"], [4, "HealthyHeart"], [5, "FamilyTherapy"]]
        case "clients":
            return [[1, "Client Jackson"], [2, "Bob Carti"], [3, "Jennie O"], [4, "Benedikt Cumberbatch"], [5, "Tazeev Almaz"]]
        default:
            return []
    }
}