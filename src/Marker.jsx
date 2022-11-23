import * as React from "react";

export const Marker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
      // marker.addListener("click", ({ domEvent, latLng }) => {
      //   options.onClick(domEvent)
      // });
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      marker.addListener("click", ({ domEvent, latLng }) => {
      options.onClick(domEvent, options.resultRef, options.id)
      });
    }
  }, [marker, options]);
  return null;
};