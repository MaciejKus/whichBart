export const updateStation = (s) => ({
    type: 'UPDATE_STATION',
    name: s.name,
    lat: s.lat,
    lng: s.lng,
    address: s.address
});
