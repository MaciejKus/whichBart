* allow users to select destination station and times and address. if address, use same method of getting to station (bike, walk) to get from the bart station nearest to the destination.  if destination is chosen, use different BART API to get trip details instead of just train times for the nearest station is on destination chosen. 

* for destinations, has a text bar with autocomplete of all bart stations

* list next catchable trains with ones that are within 5 (?) minutes of getting to bart in red. 

* make things pretty (css, Material UI?)

* clean up code/filenames

* maybe cache destination and origin directions to/from bart and have option to load one of the other in the bart map. Have a single map with a button allowing user to toggle between startAddress to BART and BART to destinationAddress.
