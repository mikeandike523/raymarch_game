var auxillaryFunctions=`

float brick(vec3 v,float s){
	if(mod(floor(v.x*s)+floor(v.y*s)+floor(v.z*s),2.)<0.001)
		return 1.;
	return 0.;
}





`;


var sceneDistanceScript=`
vec3 newPt=worldToObject(pt,vec3(0.5*sin(elapsedTime/500.),0.,0.),mat3(1.,0.,0.,0.,1.,0.,0.,0.,1.));
float dist = length(vec3(floor(newPt.x*10.)/10.,newPt.yz))-0.5;
return dist/20.;
`;

var shadingScript=`
vec3 newPt=worldToObject(pt,vec3(0.5*sin(elapsedTime/500.),0.,0.),mat3(1.,0.,0.,0.,1.,0.,0.,0.,1.));
	vec3 baseColor = vec3(brick(newPt,3.)*0.7+0.2,0.2,0.4);
	return ((dot(n,normalize(vec3(1.,1.,1.)))/1.7+0.8)*0.95+0.05)*baseColor;
`;
coordinateAxes={}