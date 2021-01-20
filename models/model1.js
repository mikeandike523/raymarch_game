var auxillaryFunctions=`

float brick(vec3 v,float s){
	if(mod(floor(v.x*s)+floor(v.y*s)+floor(v.z*s),2.)<0.001)
		return 1.;
	return 0.;
}





`;


var sceneDistanceScript=`

return length(pt)-0.5;
`;

var shadingScript=`

	return vec3(dot(n,vec3(0.,1.,0.)));
`;
