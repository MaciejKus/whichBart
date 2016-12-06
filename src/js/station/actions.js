export const updateStation = (s) => ({
    type: 'UPDATE_STATION',
    name: s.name,
    abbr: s.abbr,
    lat: s.lat,
    lng: s.lng,
    address: s.address
});
