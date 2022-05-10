export default async function getGeoJSONS() {
    const apiResponse = await fetch("http://192.168.1.103:3099/list", {
        method: "GET",
        headers: {
            Accept: "*/*",
        }
    });
    return await apiResponse.json();
};