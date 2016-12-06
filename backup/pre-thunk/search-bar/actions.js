export const updateAddress = (address) => ({
    type: 'UPDATE_ADDRESS',
    address
});

export const updateLatLng = (address, lat, lng) => ({
    type: 'UPDATE_LATLNG',
    address: address,
    lat: lat,
    lng: lng
});

export const updateStatus = (stat) => ({
    type: 'UPDATE_STATUS',
    stat
});

/*
export const updateStation = (station) => ({
    type: 'UPDATE_STATUS',
    stat
});
*/
