import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
function GoogleMap(props) {
console.log("these are the props")
console.log(props)
  const markers = props.posts.map((post)=>{
    return (
      <Marker key={post.id}
        name={post.date}
        position={{lat: post.Latitude, lng: post.Longitude}}
        // icon={{
          // url: "/pngwave.png",
          // anchor: new google.maps.Point(32,32),
          // scaledSize: new google.maps.Size(64,64)
        // }} 
      />
    )
  })
  
  // const makeMarkers = async () => {
  //   const posts = this.props.posts;
  //   const google=this.props.google;
  //    const markersMade = props.posts.map((post) => {
  //     return (
  //       <Marker key={post.id}
  //         name={post.date}
  //         position={{lat: post.Latitude, lng: post.Longitude}}
  //         // icon={{
  //           // url: "/pngwave.png",
  //           // anchor: new google.maps.Point(32,32),
  //           // scaledSize: new google.maps.Size(64,64)
  //         // }} 
  //       />
  //     )
  //   })
  // }

  return (

    <Map google={props.google} zoom={14}>
    {markers}
    </Map>
  )
}
export default GoogleApiWrapper(
(props)=>({
  apiKey: 'AIzaSyB7G8yZAkGYtf2QQzkS1n0E1gZtpPF_h8w',
  // LoadingContainer: GoogleMap
}))(GoogleMap)

