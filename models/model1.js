var auxillaryFunctions=`

float brick(vec3 v,float s){
	if(mod(floor(v.x*s)+floor(v.y*s)+floor(v.z*s),2.)<0.001)
		return 1.;
	return 0.;
}






`;


var sceneDistanceScript=`

vec3 b= vec3(1.,1.,1.);
vec3 q = abs(pt) - b;
float boundingBox= length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0); 
float cylinder = length(pt.xz)-0.5*sin(pt.y)*sin(pt.y)-0.15;
float ball = length(pt-vec3(0.,1.1,0.))-0.3;
float ground = pt.y+1.;
return min(min(max(cylinder,boundingBox),ball),max(ground,boundingBox));
`;
var shadingScript=`
	return abs(n);
`;
