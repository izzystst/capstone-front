import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
function GoogleMap(props) {
  return (
    <Map google={props.google} zoom={14} />
  )
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7G8yZAkGYtf2QQzkS1n0E1gZtpPF_h8w',
  LoadingContainer: GoogleMap
})(GoogleMap)



// import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// class MapRender extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//     console.log("these are the map props")
//   	console.log(props)
//   }

//   makeMarkers = () => {
//     const posts = this.props.posts;
//     const google=this.props.google;
//     return posts.map((post) => {
//       return (
//         <Marker key={post.id}
//           name={post.date}
//           position={{lat: post.Latitude, lng: post.Longitude}}
//           // icon={{
//             // url: "/pngwave.png",
//             // anchor: new google.maps.Point(32,32),
//             // scaledSize: new google.maps.Size(64,64)
//           // }} 
//         />
//       )
//     })
//   }


//   render() {
//     const containerStyle = {
//       position: 'relative',
//       width: "100%",
//       height: "100%"
//     }
//     const markers = this.makeMarkers();
//     // const bounds = new this.props.google.maps.LatLngBounds();
//     // for (let quake in this.props.quakes) {
//     //   bounds.extend( {lat: quake.corrdinates[1], lng: quake.corrdinates[0]} )
//     // }
//     return (
//       <Map 
//         containerStyle={containerStyle}
//         google={this.props.google} 
//         // bounds={bounds}
//         initialCenter={{
//             lat: 42.39,
//             lng: -72.52
//         }}
//       >
//       {markers}
//       </Map>
//     )
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyB7G8yZAkGYtf2QQzkS1n0E1gZtpPF_h8w"
// })(MapRender)