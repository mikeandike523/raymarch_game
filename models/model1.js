var auxillaryFunctions=`
float atan2( float y, float x)
{
    return x == 0.0 ? sign(y)*PI/2. : atan(y, x);
}
float brick(vec3 v,float s){
	if(mod(floor(v.x*s)+floor(v.y*s)+floor(v.z*s),2.)<0.001)
		return 1.;
	return 0.;
}
`;


var sceneDistanceScript=`
float dist = length(vec3(floor(pt.x*10.)/10.,pt.yz))-0.5;
return dist/20.;
`;

var shadingScript=`
	vec3 baseColor = vec3(brick(pt,3.)*0.7+0.2,0.2,0.4);
	return ((dot(n,normalize(vec3(1.,1.,1.)))/1.7+0.8)*0.95+0.05)*baseColor;
`;
