var auxillaryFunctions=`

float brick(vec3 v,float s){
	if(mod(floor(v.x*s)+floor(v.y*s)+floor(v.z*s),2.)<0.001)
		return 1.;
	return 0.;
}






`;


var sceneDistanceScript=`

mat3 rot=mat3(cos(elapsedTime/500.),0.,sin(elapsedTime/500.),0.,1.,0.,cos(elapsedTime/500.+PI/2.),0.,sin(elapsedTime/500.+PI/2.));
pt=rot*pt;

vec3 b= vec3(1.,1.,1.);
vec3 q = abs(pt) - b;
float boundingBox= length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0); 
float cylinder = (length(pt.xz)-0.5*sin(pt.y)*sin(pt.y)-0.15);
float ball = length(pt-vec3(0.,1.1,0.))-0.3;
float ground = pt.y+1.;
return min(min(max(cylinder,boundingBox),ball),max(ground,boundingBox));
`;
var shadingScript=`
	mat3 rot=mat3(cos(elapsedTime/500.),0.,sin(elapsedTime/500.),0.,1.,0.,cos(elapsedTime/500.+PI/2.),0.,sin(elapsedTime/500.+PI/2.));
	pt=rot*pt;
	n=rot*n;
	float d1 = march(pt+n*0.01,normalize(vec3(-1.,1.,1.)));
	if (d1>0.){
	return 0.5*abs(n);
	}
	return abs(n);
`;
